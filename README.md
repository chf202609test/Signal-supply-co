# Signal Supply Co.

A fictional static storefront for testing web advertising conversion signals. No real payments or customer data.

## Funnel
Home → Product → Add to cart → Checkout → Purchase confirmation

Local test logging is already wired for PageVisit, ViewContent, AddToCart and Purchase. `tracking.js` intentionally contains a placeholder rather than a copied Reddit Pixel implementation so you can experience Reddit's current onboarding flow and paste the official code from Events Manager.

## Deploy on GitHub Pages
1. Create a new public GitHub repository (for example `signal-supply-co`).
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. A project site normally appears at `https://YOUR-USERNAME.github.io/signal-supply-co/`.

## Connect Reddit Pixel
1. Create/open your Reddit Ads account and Events Manager.
2. Create the Pixel/data source and follow Reddit's current web installation instructions.
3. Open `tracking.js` in GitHub and paste the official base code in the marked section.
4. Update `window.redditEvent()` with Reddit's current event-call syntax as shown by Events Manager/documentation.
5. Commit the change; wait for GitHub Pages to redeploy.
6. Run the full storefront funnel and inspect Events Manager / Pixel Helper.

Do not enter real personal, customer, payment, or sensitive information into this demo.
