
Lowcountry Resale Solutions - Static Refurbished Phone Store
-----------------------------------------------------------

Contents:
- index.html, products.html, cart.html, faq.html, contact.html
- assets/ (CSS, JS, placeholder images)
- netlify/functions/create-checkout-session.js (Netlify Function using Stripe)

IMPORTANT - Stripe & Netlify setup
1. This site uses Stripe Checkout via a Netlify Function. Before deploying to Netlify, set these environment variables in your Netlify site settings:
   - STRIPE_SECRET_KEY  (your Stripe secret key)
   - STRIPE_PUBLISHABLE_KEY  (your Stripe publishable key)  [used if you integrate client-side]
   - SUCCESS_URL  (optional) e.g. https://yourdomain.com/success.html
   - CANCEL_URL  (optional) e.g. https://yourdomain.com/cart.html

2. Netlify will automatically detect the functions in netlify/functions. Make sure to deploy the whole repo (the 'netlify' folder included).

3. If you don't provide STRIPE_SECRET_KEY the checkout will fail and show an error. Use Stripe test keys for testing.

Notes & safety:
- Do NOT ask customers to submit SSNs. This site clearly states "No Social Security numbers required, no credit checks".
- The included checkout function charges real cards when STRIPE_SECRET_KEY is set — test in Stripe test mode first.

If you want me to preconfigure the site to use a different payment provider or remove live payment code and use a mock checkout, tell me and I will update.

