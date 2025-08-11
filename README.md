# Next.js E-commerce Starter

This is a small e-commerce starter meant for testing and learning. It uses Stripe Checkout in test mode.

## Setup

1. Unzip the downloaded file.
2. (Optional) Preview locally:
   - Install Node.js LTS from https://nodejs.org
   - Open a terminal in the project folder and run:
     ```
     npm install
     npm run dev
     ```
   - Visit http://localhost:3000 to preview the site.
3. Add Stripe keys:
   - Create a free Stripe account at https://stripe.com and enable **View test data**.
   - Create a file named `.env.local` in the project root with:
     ```
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
     STRIPE_SECRET_KEY=sk_test_...
     NEXT_PUBLIC_BASE_URL=http://localhost:3000
     ```
   - Replace `pk_test_...` and `sk_test_...` with your Stripe test keys.
4. Deploy to Vercel (free) for an online demo:
   - Create a GitHub repo and push the project files (or upload via GitHub web UI).
   - Sign up at https://vercel.com and connect GitHub. Import the repo & deploy.
   - In Vercel project settings add the same environment variables (use your Vercel URL for NEXT_PUBLIC_BASE_URL).
   - Redeploy and your site will be live.

## Test Stripe
- Use Stripe test card `4242 4242 4242 4242` (any expiry/CVC) to simulate payments.
- This starter uses Stripe Checkout so you don't handle card data directly.

## Notes
- You must supply your own Stripe API keys. I cannot pre-connect Stripe because keys are private to your Stripe account.
- If you'd like, I can walk you step-by-step to create a Stripe account and copy the keys into Vercel.
