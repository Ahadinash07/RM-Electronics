"use client";
import { useState, useEffect } from "react";
import { trackFormStart, trackFormSubmit, trackConversion } from "@/lib/gtm";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    area: "",
    preference: "call",
    consent: false,
    company_website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const issues = [
    "No Display", "No Sound", "TV Not Turning On", "Black Screen",
    "Screen Flickering", "Lines on Screen", "WiFi Not Connecting",
    "Apps Not Working", "Remote Not Working", "No Signal",
    "TV Keeps Restarting", "TV Overheating", "Other"
  ];

  const areas = [
    "LBNAGAR", "CHINATALKUNTA", "VP", "Banjara Hills", "Hitech City", "Gachibowli", "Madhapur", "Kondapur",
    "Jubilee Hills", "Kukatpally", "Miyapur", "HITEC City", "Whitefield",
    "Manikonda", "Narsingi", "Tellapur", "Gopanpally", "Other"
  ];

  // Track form start when component mounts
  useEffect(() => {
    trackFormStart("lead_form");
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name is required (2-60 characters)";
    } else if (formData.name.length > 60) {
      newErrors.name = "Name must be less than 60 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      // Remove all spaces and check if it's exactly 10 digits starting with 6-9
      const cleanPhone = formData.phone.replace(/\s/g, "");
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
      }
    }

    if (!formData.issue) {
      newErrors.issue = "Please select your TV issue";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to privacy policy and lead consent";
    }

    // Honeypot check
    if (formData.company_website) {
      newErrors.honeypot = "Submission rejected";
    }

    return newErrors;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const urlEncodedData = new URLSearchParams();
        urlEncodedData.append("Name", formData.name);
        urlEncodedData.append("Phone", formData.phone);
        urlEncodedData.append("Issue", formData.issue);
        urlEncodedData.append("Area", formData.area || "Not Specified");
        urlEncodedData.append("Preference", formData.preference);
        urlEncodedData.append("_subject", "New Lead - RM Electronics (www.rmelectronics.hyd)");
        urlEncodedData.append("_captcha", "false"); // Disables captcha for seamless submission
        
        const response = await fetch("https://formsubmit.co/ajax/rmelectronicshyd@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
          },
          body: urlEncodedData.toString(),
        });
        
        if (response.ok) {
          // Track form submission
          trackFormSubmit({
            issue: formData.issue,
            area: formData.area || "Not Specified",
            formId: "lead_form"
          });

          // Track conversion for ads
          trackConversion(500);

          // Redirect to thank you page
          window.location.href = "/thank-you";
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - invisible to humans but visible to bots */}
      <div className="opacity-0 absolute -z-10" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          value={formData.company_website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors"
            placeholder="Your name"
            minLength={2}
            maxLength={60}
          />
          {errors.name && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors"
            placeholder="10-digit mobile number (e.g., 9876543210)"
            maxLength={10}
            pattern="[6-9]\d{9}"
            title="Please enter exactly 10 digits, starting with 6, 7, 8, or 9"
          />
          {errors.phone && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-[#374151] mb-1">
            TV Issue *
          </label>
          <select
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select your issue</option>
            {issues.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
          {errors.issue && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.issue}</p>
          )}
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-[#374151] mb-1">
            Area
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select area (optional)</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">
          Contact Preference
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preference"
              value="call"
              checked={formData.preference === "call"}
              onChange={handleChange}
              className="text-[#FF4A17]"
            />
            <span className="text-sm text-[#374151]">Call</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preference"
              value="whatsapp"
              checked={formData.preference === "whatsapp"}
              onChange={handleChange}
              className="text-[#FF4A17]"
            />
            <span className="text-sm text-[#374151]">WhatsApp</span>
          </label>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 text-[#FF4A17]"
          />
          <span className="text-sm text-[#374151]">
            I agree to the privacy policy and lead consent *
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-[#FF4A17] mt-1">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-[#FF4A17] text-white font-semibold rounded-lg hover:bg-[#F97316] transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>
    </form>
  );
};