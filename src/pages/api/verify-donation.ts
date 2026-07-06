import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Server-side verification of a Paystack donation.
 * The browser only ever sees the public key, so a "success" callback in the
 * browser cannot be trusted. This route re-checks the transaction against
 * Paystack using the secret key before we confirm the donation to the donor.
 *
 * Secret resolution:
 *   - Production (Cloudflare Pages): locals.runtime.env.PAYSTACK_SECRET_KEY
 *   - Local dev (astro dev):         import.meta.env.PAYSTACK_SECRET_KEY (.env)
 */
export const POST: APIRoute = async ({ request, locals }) => {
  const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  const runtimeEnv = (locals as any)?.runtime?.env ?? {};
  const secret = runtimeEnv.PAYSTACK_SECRET_KEY || import.meta.env.PAYSTACK_SECRET_KEY;

  if (!secret) {
    return json({ verified: false, error: 'Payment verification is not configured.' }, 500);
  }

  let reference: string | undefined;
  try {
    const body = await request.json();
    reference = typeof body?.reference === 'string' ? body.reference.trim() : undefined;
  } catch {
    return json({ verified: false, error: 'Invalid request.' }, 400);
  }

  if (!reference) {
    return json({ verified: false, error: 'Missing transaction reference.' }, 400);
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secret}` } }
    );
    const payload = await res.json();

    const txn = payload?.data;
    const succeeded = payload?.status === true && txn?.status === 'success';

    if (!succeeded) {
      return json({ verified: false, error: 'Transaction could not be verified.' }, 402);
    }

    // Amounts are in kobo (NGN * 100).
    return json({
      verified: true,
      reference: txn.reference,
      amount: txn.amount / 100,
      currency: txn.currency,
    });
  } catch {
    return json({ verified: false, error: 'Verification service unavailable.' }, 502);
  }
};
