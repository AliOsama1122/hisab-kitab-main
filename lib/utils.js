import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId) => {
  if (window.location.pathname !== "/") {
    window.location.href = `/#${sectionId}`;
    return;
  }
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${sectionId}`);
  }
};

export const handleScheduleDemo = () => {
  window.open("tel:+923001234567", "_self");
};

export const handleContactUs = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};
