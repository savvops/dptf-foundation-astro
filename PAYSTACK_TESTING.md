# Paystack Testing Guide - DPTF

## ✅ Keys Updated

**Public Key:** `pk_test_a7294d9ffea6780241bb7f45b09bf6afd1fef9c4`

## 🧪 How to Test Locally

### Step 1: Start the Dev Server
```bash
cd dptf-foundation-astro
npm run dev
```

### Step 2: Open Browser
Go to: `http://localhost:4321/get-involved`

### Step 3: Test a Payment

1. **Click any donation amount** (e.g., ₦1,000)
2. **Paystack popup will appear**
3. **Enter test card details:**
   - Card Number: `4084 0840 8408 4081`
   - CVV: `000`
   - Expiry: `12/30` (or any future date)
   - PIN: `1234` (if asked)
   - OTP: `123456` (if asked)
4. **Enter any email** (e.g., `test@example.com`)
5. **Click Pay**

### Expected Result:
- Payment succeeds
- Alert shows: "Thank you for your donation! Reference: DPTF_xxxxxxxxx"
- Redirects to `/thank-you` page

## 📝 Test Card Reference

| Scenario | Card Number | CVV | Expiry |
|----------|-------------|-----|--------|
| **Success** | 4084 0840 8408 4081 | 000 | 12/30 |
| Decline | 4084 0840 8408 4082 | 000 | 12/30 |
| Insufficient Funds | 4084 0840 8408 4083 | 000 | 12/30 |

## 🔍 Check Transactions in Dashboard

1. Login to https://dashboard.paystack.com
2. Go to **Transactions**
3. You should see test transactions with reference numbers starting with "DPTF_"

## ⚠️ Important Notes

- These are **TEST keys** - no real money is charged
- For live donations, you need to:
  1. Complete Paystack business verification
  2. Switch to Live mode in dashboard
  3. Get **Live Public Key** (starts with `pk_live_`)
  4. Update the key in `src/pages/get-involved.astro`

## 🚀 Ready to Deploy?

The website is ready! Just run:
```bash
npm run build
```

Then deploy the `dist` folder to Vercel/Cloudflare.
