"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function goTo(url: string) {
  window.location.href = url;
}

export function SiteLink({ href, onClick, target, children, ...rest }: SiteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();

    if (target === "_blank") {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = href;
  };

  return (
    <a href={href} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
