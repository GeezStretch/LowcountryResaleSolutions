const PRODUCTS = [{"id": "apple-watch-series-9", "name": "Apple Watch Series 9 (45mm)", "price": 399.0, "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop"}, {"id": "airtag-4-pack", "name": "Apple AirTag \u2014 4 Pack", "price": 99.0, "image": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1600&auto=format&fit=crop"}, {"id": "apple-pencil-2", "name": "Apple Pencil (2nd Gen)", "price": 129.0, "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop"}, {"id": "airpods-pro-2", "name": "AirPods Pro (2nd Gen)", "price": 249.0, "image": "https://images.unsplash.com/photo-1560844027-6b6c8c0b0bff?q=80&w=1600&auto=format&fit=crop"}, {"id": "ps5-dualsense", "name": "PS5 DualSense Controller", "price": 69.0, "image": "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1600&auto=format&fit=crop"}, {"id": "xbox-series-x-controller", "name": "Xbox Series X Controller", "price": 59.0, "image": "https://images.unsplash.com/photo-1603481588273-0c5c9a0f7d3b?q=80&w=1600&auto=format&fit=crop"}];


function getCart() { return JSON.parse(localStorage.getItem('lrs_cart')||'[]'); }
function saveCart(c) { localStorage.setItem('lrs_cart', JSON.stringify(c)); renderCart(); }

function addToCart(id, name, price) {
  const cart = getCart();
  const item = cart.find(i=>i.id===id);
  if (item) item.qty += 1; else cart.push({id, name, price, qty:1});
  saveCart(cart);
  alert(name + " added to cart");
}

function renderCart() {
  const list = document.getElementById('cart-list');
  const summary = document.getElementById('cart-summary');
  if (!list || !summary) return;
  const cart = getCart();
  if (cart.length === 0) { list.innerHTML = '<p>Your cart is empty. <a href="products.html">Shop products</a>.</p>'; summary.innerHTML = ''; return; }
  list.innerHTML = '<ul>' + cart.map(function(it, idx){ return '<li>' + it.name + ' — $' + it.price + ' x ' + it.qty + ' <button onclick="removeItem(' + idx + ')">Remove</button></li>'; }).join('') + '</ul>';
  const subtotal = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  const tax = Math.round(subtotal * 0.07 * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;
  summary.innerHTML = '<div>Subtotal: $' + subtotal.toFixed(2) + '</div><div>Tax: $' + tax.toFixed(2) + '</div><div><strong>Total: $' + total.toFixed(2) + '</strong></div><button onclick="checkout()">Proceed to Checkout</button>';
}

function removeItem(idx) {
  const cart = getCart();
  cart.splice(idx,1);
  saveCart(cart);
}

function checkout() {
  alert('Demo checkout — integrate payment processor to enable.');
}

document.addEventListener('DOMContentLoaded', renderCart);
