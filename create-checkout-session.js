
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const items = body.items || [];
    // Map items to Stripe line items
    const line_items = items.map(it => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: it.title,
          metadata: { id: it.id }
        },
        unit_amount: Math.round(it.price * 100),
      },
      quantity: it.qty
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: process.env.SUCCESS_URL || 'https://lowcountryresalesolutions.org/success.html',
      cancel_url: process.env.CANCEL_URL || 'https://lowcountryresalesolutions.org/cart.html'
    });
    return { statusCode: 200, body: JSON.stringify({url: session.url}) };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: JSON.stringify({error: err.message}) };
  }
};
