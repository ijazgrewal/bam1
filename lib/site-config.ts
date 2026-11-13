export const siteConfig = {
  name: "BAM Transport",
  tagline: "Private Umrah transport across Saudi Arabia",
  phone: "+966 50 713 5765",
  whatsappNumber: "966507135765",
  email: "TODO(BAM): add customer-service email",
  address: "TODO(BAM): add registered business address",
  licenceNumber: "TODO(BAM): add licence/registration number",
} as const;

export const whatsappPrefill = "Hi BAM, I need a transfer from ___ to ___ on ___.";
export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;
