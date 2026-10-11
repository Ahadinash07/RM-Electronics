# Google Ads Setup Guide for RM Electronics

This document explains all the Google Ads tracking features implemented and what needs to be configured.

## ✅ Implemented Features

### 1. Google Tag Manager (GTM)
- **Container ID**: GTM-5QDKB5M3
- **Location**: `src/app/layout.tsx`
- **Events Tracked**:
  - `phone_click` - When user clicks call buttons
  - `whatsapp_click` - When user clicks WhatsApp buttons
  - `cta_click` - When user clicks any CTA button
  - `form_start` - When user starts filling the form
  - `form_submit` - When user submits the form
  - `faq_open` - When user opens FAQ items
  - `scroll_depth` - Scroll tracking (25%, 50%, 75%, 100%)
  - `lead_source` - UTM parameters and referrer tracking
  - `page_view` - Page view tracking
  - `conversion` - Lead generation conversion
  - `call_conversion` - Phone call conversion

### 2. Google Ads Conversion Tracking
- **Status**: Placeholder code added, needs actual conversion ID
- **Conversions Tracked**:
  - Lead generation (form submission)
  - Phone call (call button clicks)

## 🔧 Configuration Required

### Step 1: Google Ads Conversion Setup

1. **Get your Google Ads Conversion ID**:
   - Go to Google Ads → Tools & Settings → Conversions
   - Create a new conversion action for "Lead"
   - Copy the Conversion ID and Label

2. **Update the code in src/app/thank-you/page.tsx**:
   Replace:
   ```javascript
   conversion_id: "AW-XXXXXXXXXX",
   conversion_label: "XXXXXXXXXXX",
   ```
   with your actual conversion ID and label

3. **Update the code in src/app/call/page.tsx**:
   Replace:
   ```javascript
   send_to: "AW-XXXXXXXXXX/XXXXXXXXXXX",
   ```
   with your actual conversion ID/label

### Step 2: GTM Configuration

1. **In GTM Dashboard**:
   - Create triggers for the custom events:
     - `phone_click`
     - `whatsapp_click`
     - `cta_click`
     - `form_start`
     - `form_submit`
     - `conversion`
     - `call_conversion`

2. **Create Google Ads tags**:
   - Tag type: Google Ads Conversion Tracking
   - Trigger: Custom Event → `conversion` or `call_conversion`
   - Conversion ID: Your Google Ads conversion ID

### Step 3: UTM Parameter Tracking

The website automatically tracks UTM parameters:
- `utm_source` - Where the traffic came from (google, facebook, etc.)
- `utm_medium` - How the traffic came (cpc, organic, etc.)
- `utm_campaign` - Which campaign

Example UTM URL:
```
https://www.rmelectronics.hyd/?utm_source=google&utm_medium=cpc&utm_campaign=tv_repair_hyderabad
```

## 📊 Tracking Data Collected

### Lead Form Submissions:
- Name
- Phone number
- TV issue
- Area
- Contact preference (Call/WhatsApp)
- Current URL when submitted
- UTM parameters
- Referrer

### Phone Calls:
- Button position (hero, navbar, footer, etc.)
- Device type (mobile/desktop)
- Current URL
- UTM parameters

### WhatsApp Clicks:
- Button position
- Campaign name
- Device type
- Current URL

## 🎯 Conversion Value

Currently set to ₹500 (estimated value per lead). You can adjust this in:
- `src/components/LeadForm.tsx` (line ~103)
- `src/app/thank-you/page.tsx` (line ~18)

## 📱 Testing Your Setup

### 1. Test GTM:
1. Install Google Tag Assistant extension
2. Navigate to your website
3. Check if GTM container loads
4. Click buttons and verify events fire

### 2. Test Google Ads:
1. Use Google Tag Assistant
2. Check conversion tags fire on thank-you page
3. Verify conversion data appears in Google Ads

## 🔍 Important Notes

1. **All navigation uses window.location.href** - This ensures full page loads for better ad tracking
2. **No client-side routing** - All URLs change properly for ad platforms
3. **Conversion events fire before redirect** - Ensures data is captured
4. **Current URL included in all events** - Better attribution
5. **Device type tracked** - Mobile vs desktop optimization

## 🚀 Production Checklist

Before going live with ads:

- [ ] Replace Google Ads conversion ID placeholders
- [ ] Set up GTM triggers and tags
- [ ] Test all tracking with Tag Assistant
- [ ] Verify conversion events fire correctly
- [ ] Check UTM parameter tracking
- [ ] Test on mobile and desktop
- [ ] Verify form submission tracking
- [ ] Test phone call tracking
- [ ] Confirm thank-you page loads correctly

## 📞 Need Help?

If you need help with:
- Configuring Google Ads conversions
- GTM tag setup
- UTM parameter structure

Contact your ads manager or platform support.
