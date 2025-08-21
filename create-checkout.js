
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { productId, type = 'down', plan = 24 } = body;

    const products = require('../../assets/products.json');
    const p = products.find(x => x.id === productId);
    if (!p) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid product' }) };
    }

    let amount = 0;
    if (type === 'full') {
      amount = Math.round(Number(p.fullPrice) * 100);
    } else {
      amount = Math.round(Number(p.downPayment) * 100);
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: `${p.name} - ${type === 'full' ? 'Full Payment' : 'Down Payment'} (${plan} mo)` },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ['US'] },
      success_url: process.env.SUCCESS_URL || 'https://your-domain/success.html',
      cancel_url: process.env.CANCEL_URL || 'https://your-domain/cancel.html',
      metadata: {
        productId: p.id,
        type: type,
        plan: String(plan),
        fullPrice: String(p.fullPrice),
        downPayment: String(p.downPayment),
      }
    });

    return { statusCode: 200, body: JSON.stringify({ id: session.id }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
};
