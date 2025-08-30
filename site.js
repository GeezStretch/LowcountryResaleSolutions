
window.store = (function(){
  const KEY = 'lcrs_cart_v1';
  function getCart(){ return JSON.parse(localStorage.getItem(KEY)||'[]');}
  function save(cart){ localStorage.setItem(KEY, JSON.stringify(cart)); updateCount(); }
  function updateCount(){ const c = getCart().reduce((s,i)=>s+i.qty,0); document.querySelectorAll('#cart-count').forEach(el=>el.textContent=c); }
  function add(product){ const cart = getCart(); const found = cart.find(i=>i.id===product.id); if(found){ found.qty+=1 } else { cart.push({...product, qty:1}); } save(cart); alert(product.title+' added to cart'); }
  function remove(id){ let cart=getCart(); cart=cart.filter(i=>i.id!==id); save(cart); }
  function setQty(id, qty){ const cart=getCart(); const it=cart.find(i=>i.id===id); if(it){ it.qty=qty; save(cart); } }
  function clear(){ save([]); }
  return {getCart, add, remove, setQty, clear, updateCount};
})();

document.addEventListener('DOMContentLoaded', ()=> {
  store.updateCount();
  // load products if on products page
  if(window.PRODUCTS && document.getElementById('product-grid')){
    const grid=document.getElementById('product-grid');
    window.PRODUCTS.forEach(p=>{
      const div=document.createElement('div'); div.className='product';
      div.innerHTML = `<img src="${p.img}" alt="${p.title}"><h4>${p.title}</h4><div class="price">$${p.price.toFixed(2)}</div><div class="specs">${p.specs.join(' • ')}</div><button class="add-btn">Add to Cart</button>`;
      grid.appendChild(div);
      div.querySelector('.add-btn').addEventListener('click', ()=> store.add(p));
    });
  }

  // cart page render
  if(document.getElementById('cart-contents')){
    const render = ()=>{
      const cart=document.getElementById('cart-contents');
      const items = store.getCart();
      if(!items.length){ cart.innerHTML='<p>Your cart is empty. <a href="/products.html">Shop now</a></p>'; document.getElementById('cart-total').textContent='0.00'; return; }
      let html='<table style="width:100%"><thead><tr><th>Product</th><th>Qty</th><th>Price</th><th></th></tr></thead><tbody>';
      let total=0;
      items.forEach(it=>{
        html+=`<tr><td>${it.title}</td><td><input type="number" min="1" value="${it.qty}" data-id="${it.id}" class="qty-input" style="width:70px"></td><td>$${(it.price*it.qty).toFixed(2)}</td><td><button class="rm" data-id="${it.id}">Remove</button></td></tr>`;
        total += it.price*it.qty;
      });
      html+='</tbody></table>';
      cart.innerHTML = html;
      document.getElementById('cart-total').textContent = total.toFixed(2);
      document.querySelectorAll('.rm').forEach(b=>b.addEventListener('click', (e)=>{ store.remove(e.target.dataset.id); render(); }));
      document.querySelectorAll('.qty-input').forEach(inp=>{
        inp.addEventListener('change', (e)=>{ const q = parseInt(e.target.value)||1; store.setQty(e.target.dataset.id, q); render(); });
      });
    };
    render();
  }

  // testimonials
  if(document.getElementById('testimonials')){
    const samples = [
      "Really fast shipping — phone looked new. 5 stars!!",
      "Good value, had a small scratch but works perfect. 4/5.",
      "Customer service was helpful. setup was easy, very happy.",
      "Phone arrived with battery health 92% — super impressed.",
      "Decent refurb for the price. Could include a screen protector but overall solid.",
      "Arrived late but they refunded shipping. Product works great!"
    ];
    const container = document.getElementById('testimonials');
    samples.forEach((t,i)=>{
      const d = document.createElement('div'); d.className='testimonial';
      d.innerHTML = `<strong>Customer ${i+1}</strong><p>${t}</p><p class="small">★ ★ ★ ★ ${(Math.random()>0.6)?'★':''}</p>`;
      container.appendChild(d);
    });
  }
});
