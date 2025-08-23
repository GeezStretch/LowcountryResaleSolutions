
// Scroll reveal
(function(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
  }, {threshold:.12});
  els.forEach(el=>io.observe(el));
})();

// Slider
(function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;
  const slides = [...slider.querySelectorAll('.slide')];
  let i = 0;
  function show(n){ slides.forEach((s,idx)=>s.classList.toggle('active', idx===n)); }
  show(0);
  slider.querySelector('.next').addEventListener('click', ()=>{ i=(i+1)%slides.length; show(i); });
  slider.querySelector('.prev').addEventListener('click', ()=>{ i=(i-1+slides.length)%slides.length; show(i); });
  setInterval(()=>{ i=(i+1)%slides.length; show(i); }, 5000);
})();

// Fly-to-cart
(function(){
  const cart = document.getElementById('cart-icon');
  if(!cart) return;
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.add');
    if(!btn) return;
    const card = btn.closest('.card');
    const img = card && card.querySelector('.media img');
    if(!img) return;
    const clone = img.cloneNode(true);
    const rect = img.getBoundingClientRect();
    clone.style.position='fixed'; clone.style.left=rect.left+'px'; clone.style.top=rect.top+'px';
    clone.style.width=rect.width+'px'; clone.style.transition='all .7s ease'; clone.style.zIndex=9999;
    document.body.appendChild(clone);
    const dest = cart.getBoundingClientRect();
    requestAnimationFrame(()=>{
      clone.style.left = dest.left+'px'; clone.style.top=dest.top+'px'; clone.style.width='24px'; clone.style.opacity='0.6';
    });
    setTimeout(()=>clone.remove(), 750);
  });
})();
