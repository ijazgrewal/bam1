export const siteConfig = {
  name: "BAM Transport",
  tagline: "Private Umrah transport across Saudi Arabia",
  phone: "+966 50 713 5765",
  whatsappNumber: "966507135765",
  // TODO(BAM): add customer-service email, registered address and licence number before launch.
  email: "",
  address: "",
  licenceNumber: "",
} as const;

export const whatsappPrefill = "Hi BAM, I need a transfer from ___ to ___ on ___.";
export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;
