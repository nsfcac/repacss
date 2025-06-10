export const GA_TRACKING_ID = import.meta.env.PUBLIC_GA_ID || 'G-837FYSF17X';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for REPACSS
export const trackDocumentationAccess = (documentName: string) => {
  event({
    action: 'access_documentation',
    category: 'user_guide',
    label: documentName,
  });
};

export const trackSearchQuery = (query: string, resultsCount: number) => {
  event({
    action: 'search',
    category: 'documentation',
    label: query,
    value: resultsCount,
  });
};

export const trackExternalLinkClick = (url: string, context: string) => {
  event({
    action: 'click_external_link',
    category: 'navigation',
    label: `${context}: ${url}`,
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}