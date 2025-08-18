const stripe = Stripe('pk_live_51RxKri0H8PCCsoV6l5oibeWA3aDIH2CHzg7OacCj7A9Jfhwm6EVQiqwuBJ06JForvf6feb1MC6S9kQ35RKF91DS900bdb58qgu');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { error, paymentIntent } = await stripe.confirmCardPayment('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', {
        payment_method: {
            card: card,
            billing_details: { name: 'Customer Name' },
        },
    });

    const statusElement = document.getElementById('payment-status');
    if (error) {
        statusElement.textContent = `Payment failed: ${error.message}`;
    } else {
        statusElement.textContent = 'Payment successful!';
    }
});