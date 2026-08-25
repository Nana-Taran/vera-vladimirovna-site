import { useEffect } from 'react';
import { channelFromHref, pushLeadEvent } from '@/lib/analytics';

export default function AnalyticsTracker() {
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (gtmId && !document.querySelector(`script[data-gtm-id="${gtmId}"]`)) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

      const script = document.createElement('script');
      script.async = true;
      script.dataset.gtmId = gtmId;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(script);
    }

    const onClick = (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;

      const channel = channelFromHref(link.href);
      if (!channel) return;

      pushLeadEvent(`click_${channel}`, {
        channel,
        form_location: link.dataset.formLocation || 'site_link',
        link_text: link.textContent.trim().slice(0, 80),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
