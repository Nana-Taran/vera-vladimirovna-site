export function pushLeadEvent(event, details = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...details });
}

export function channelFromHref(href) {
  if (!href) return null;
  if (href.includes('t.me/')) return 'telegram';
  if (href.includes('wa.me/')) return 'whatsapp';
  if (href.startsWith('viber://')) return 'viber';
  return null;
}
