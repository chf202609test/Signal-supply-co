/*
  SIGNAL SUPPLY CO. — REDDIT PIXEL PLACEHOLDER

  1) Create your Reddit Pixel / data source in Reddit Ads Events Manager.
  2) Follow Reddit's CURRENT installation instructions and paste the official base pixel code below.
  3) Keep window.redditEvent() as the site's single event adapter. If Reddit's current API differs,
     change only the implementation inside redditEvent rather than editing every page.

  IMPORTANT: Do not put real customer data, emails, phone numbers, or payment information on this demo site.
*/

window.REDDIT_PIXEL_INSTALLED = false;

// PASTE CURRENT OFFICIAL REDDIT PIXEL BASE CODE HERE.
// Example marker only: YOUR_REDDIT_PIXEL_ID

window.redditEvent = function(eventName, properties = {}) {
  console.log('[Signal Supply test event]', eventName, properties);

  // After installing Reddit's official pixel, replace the commented line below with
  // the exact current event-call syntax shown in Reddit's documentation / Events Manager.
  // rdt('track', eventName, properties);
};

// Treat each page load as a PageVisit in the local test log.
window.redditEvent('PageVisit', { url: window.location.href });
