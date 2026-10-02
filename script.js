/* ═══════════════════════════════════════════════════════
   WILDE WINKEL — script.js
   ═══════════════════════════════════════════════════════ */

/* ── PRODUCTS ───────────────────────────────────────────
   imgs[0]  = main product card thumbnail
   imgs[1+] = additional gallery images shown in modal
   Carousel images: files with "Logo" or "Cinema" in name
──────────────────────────────────────────────────────── */
const products = [
  {
    id: 1,
    name: 'Pistol Bag',
    cat: 'firearms',
    price: 700,
    imgs: [
      'Assets/PistolBag_Holster.jpg',
      'Assets/PistolBag_Black.jpg',
      'Assets/PistolBag_Pink.jpg',
      'Assets/BlackPistolBag_Holster.jpg',
    ],
    badge: 'Popular',
    desc: 'Secure pistol storage with dedicated space for up to two magazines. Padded interior, lockable zip and durable ripstop canvas exterior. Available in multiple colour and lining options.',
    options: [
      { name: 'Colour', choices: ['Black', 'Khaki / Tan', 'OD Green'] },
      { name: 'Lining', choices: ['Standard Black', 'Pink'] }
    ]
  },
  {
    id: 2,
    name: 'Rifle Bag',
    cat: 'firearms',
    price: 1200,
    imgs: [
      'Assets/Black_RifleBag.jpg',
      'Assets/Blaack_RifleBagOpen.jpg',
    ],
    badge: null,
    desc: 'Full-length rifle bag with padded fleece-lined interior, external MOLLE webbing, adjustable carry strap and multiple accessory pockets. Fits scoped rifles up to 1.2m.',
    options: [
      { name: 'Colour', choices: ['Black', 'Khaki / Tan'] }
    ]
  },
  {
    id: 3,
    name: 'Ammo Wallet',
    cat: 'ammo',
    price: 600,
    imgs: [
      'Assets/BlackAmmoPouch.jpg',
      'Assets/BlackAmmoPouch_Open.jpg',
      'Assets/BlackAmmoPouch_Cinema.jpg',
      'Assets/KhakiAmmoPouch_Logo.jpg',
      'Assets/BlackAmmouPouch_Logo.jpg',
    ],
    badge: null,
    desc: 'Compact ammo wallet holding up to 40 rounds. Accommodates .308 and .338 without hassle. Zip-close with dual belt-loop attachment. Built from tough ripstop canvas.',
    options: [
      { name: 'Colour', choices: ['Black', 'Khaki / Tan'] }
    ]
  },
  {
    id: 4,
    name: 'Adjustable Bed Rack',
    cat: 'accessories',
    price: 5600,
    imgs: [
      'Assets/Bedrack_DoubleCab.jpg',
      'Assets/BedRack.jpg',
      'Assets/Bedrack_Single.jpg',
      'Assets/Bedrack_SingleCab.jpg',
      'Assets/Bedrack_SingleCab1.jpg',
      'Assets/Rack_BeerHolder.jpg',
    ],
    badge: 'New',
    desc: 'High-strength steel adjustable bed rack with durable powder-coat finish. Features MOLLE-compatible side panels, D-ring tie-down points and full-length slotted rails for mounting accessories. Fits Single, Double and Super Cab bakkies.',
    options: [
      {
        name: 'Cab Size',
        choices: [
          { label: 'Double Cab', price: 5600 },
          { label: 'Super Cab',  price: 5800 },
          { label: 'Single Cab', price: 6000 },
        ]
      },
      { name: 'Colour', choices: ['Gloss Black', 'Sandpaper Black'] }
    ]
  },
  {
    id: 5,
    name: 'Bed Storage System',
    cat: 'accessories',
    price: 8500,
    imgs: [
      'Assets/BedStorage.jpg',
      'Assets/BedStorage_Open.jpg',
    ],
    badge: 'New',
    desc: 'Full-width steel drawer system for your bakkie bed. Dual slide-out drawers with locking latches, flat load surface on top and anti-slip rubber matting. Custom-fit to your bakkie model.',
    options: [
      {
        name: 'Cab Size',
        choices: [
          { label: 'Double Cab', price: 8500 },
          { label: 'Super Cab',  price: 8800 },
          { label: 'Single Cab', price: 9000 },
        ]
      },
      { name: 'Colour', choices: ['Gloss Black', 'Sandpaper Black'] }
    ]
  },
  {
    id: 6,
    name: 'Carcass Bag',
    cat: 'bags',
    price: 4250,
    imgs: [
      'Assets/CarcassBag_Logo.jpg',
    ],
    badge: null,
    desc: 'Heavy-duty carcass bag built for hunters who demand reliability in the field. Constructed from tough, easy-clean PVC-coated canvas with reinforced carry handles, heavy-duty zip and stainless steel fittings.',
    options: [
      { name: 'Colour', choices: ['Black', 'Olive / Grey'] }
    ]
  },
  {
    id: 7,
    name: 'Dash Cover',
    cat: 'accessories',
    price: 1350,
    imgs: [
      'Assets/DashBoardCover.jpg',
      'Assets/Dashboard_Cover.jpg',
    ],
    badge: null,
    desc: 'Custom-fit ripstop canvas dash cover. Keeps your dashboard cool, scratch-free and protected from UV damage. Features a built-in zip pocket for small items.',
    options: [
      { name: 'Colour', choices: ['Black', 'Khaki / Tan'] },
      {
        name: 'Vehicle',
        choices: [
          'Toyota Hilux (2016+)',
          'Ford Ranger (2012+)',
          'Isuzu D-Max (2020+)',
          'Nissan Navara (2015+)',
          'Mitsubishi Triton (2015+)',
          'Other (contact us)',
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Beer Bag',
    cat: 'accessories',
    price: 320,
    imgs: [
      'Assets/Khaki_BeerBag.jpg',
      'Assets/Khaki_BeerBagOpen.jpg',
      'Assets/Khaki_BeerBagCinema.jpg',
    ],
    badge: 'Fan Fave',
    desc: 'Insulated carry bag with 8 individual bottle compartments. Keeps your drinks cold for hours on any trip. Heavy-duty canvas exterior with reinforced carry handles.',
    options: [
      { name: 'Colour', choices: ['Khaki / Tan', 'Black'] }
    ]
  },
  {
    id: 9,
    name: 'Roll-Bar Drink Holder',
    cat: 'accessories',
    price: 220,
    imgs: [
      'Assets/Rack_BeerHolder.jpg',
    ],
    badge: null,
    desc: 'Insulated roll-bar drink holder that clamps onto any standard roll bar or bakkie rack. Keeps your drink cold. Wilde Winkel branded woven patch. The essential bush sundowner accessory.',
    options: [
      { name: 'Colour', choices: ['Khaki / Tan', 'Black'] }
    ]
  },
  {
    id: 10,
    name: 'Seat Cushion',
    cat: 'accessories',
    price: 550,
    imgs: [
      'Assets/SuperCab_SeatLogo.jpg',
      'Assets/SuperCab_Seat.jpg',
      'Assets/SuperCab_SeatSide.jpg',
    ],
    badge: null,
    desc: 'Heavy-duty waterproof seat cushion that fits neatly over your bakkie rear bench seat. Protects upholstery from mud, blood and wear. Wilde Winkel branded patch.',
    options: [
      { name: 'Colour', choices: ['Black', 'Khaki / Tan'] },
      {
        name: 'Cab Size',
        choices: [
          { label: 'Double Cab', price: 550 },
          { label: 'Super Cab',  price: 580 },
        ]
      }
    ]
  },
  {
    id: 11,
    name: 'Maintenance Rug',
    cat: 'accessories',
    price: 880,
    imgs: [
      'Assets/Maintenance_Bag.jpg',
    ],
    badge: null,
    desc: 'Work clean under any vehicle. Large waterproof mat with carry handles. Keeps you off the ground on any terrain. Available in Black, Beige and Blue.',
    options: [
      { name: 'Colour', choices: ['Black', 'Beige', 'Blue'] }
    ]
  },
  {
    id: 12,
    name: 'Oilskin Cap',
    cat: 'apparel',
    price: 300,
    imgs: [
      'Assets/Oilskin_Cap_F.jpg',
      'Assets/Oilskin_Cap_FLeft.jpg',
      'Assets/Oilskin_Cap_FRight.jpg',
      'Assets/Oilskin_Cap_M.jpg',
      'Assets/Oilskin_Cap_MLeft.jpg',
      'Assets/Oilskin_Cap_MRight.jpg',
    ],
    badge: null,
    desc: 'Crafted from durable dark oilskin material with embroidered Wilde Winkel buffalo logo on the front and side. Unisex fit, adjustable brass buckle strap. One size fits most.',
    options: null
  },
];

/* ── CAROUSEL CONFIG ────────────────────────────────────
   Only "Logo" and "Cinema" images, matched to products
──────────────────────────────────────────────────────── */
const carouselSlides = [
  { img: 'Assets/KhakiAmmoPouch_Logo.jpg',  num: '01', title: 'AMMO\nWALLET',           desc: 'Holds 40 rounds of .308 or .338. Zip-close, belt-loop ready.',                    cat: 'ammo' },
  { img: 'Assets/PistolBag_Holster.jpg',    num: '02', title: 'PISTOL\nBAG',             desc: 'Padded, lockable. Fits full-size and compact pistols with dual mag pockets.',      cat: 'firearms' },
  { img: 'Assets/Black_RifleBag.jpg',       num: '03', title: 'RIFLE\nBAG',              desc: 'Full-length fleece-lined bag with MOLLE webbing. Fits scoped rifles to 1.2m.',    cat: 'firearms' },
  { img: 'Assets/Bedrack_DoubleCab.jpg',    num: '04', title: 'ADJUSTABLE\nBED RACK',    desc: 'High-strength steel. Single, Double and Super Cab. Two colour options.',           cat: 'accessories' },
  { img: 'Assets/BedStorage_Open.jpg',      num: '05', title: 'BED STORAGE\nSYSTEM',     desc: 'Dual slide-out drawers with locking latches. Custom-fit to your bakkie.',         cat: 'accessories' },
  { img: 'Assets/CarcassBag_Logo.jpg',      num: '06', title: 'CARCASS\nBAG',            desc: 'Heavy-duty PVC canvas with reinforced handles. Built for the hunt.',              cat: 'bags' },
  { img: 'Assets/DashBoardCover.jpg',       num: '07', title: 'DASH\nCOVER',             desc: 'Custom-fit ripstop canvas. UV protection, zip pocket, scratch-free.',             cat: 'accessories' },
  { img: 'Assets/Khaki_BeerBag.jpg',        num: '08', title: 'BEER\nBAG',               desc: '8 individual bottle compartments. Heavy-duty canvas. Cold for hours.',            cat: 'accessories' },
  { img: 'Assets/Rack_BeerHolder.jpg',      num: '09', title: 'ROLL-BAR\nDRINK HOLDER',  desc: 'Clips onto any roll bar. Keeps your sundowner cold on the move.',                 cat: 'accessories' },
  { img: 'Assets/SuperCab_SeatLogo.jpg',    num: '10', title: 'SEAT\nCUSHION',           desc: 'Waterproof and tough. Protects your upholstery on every trip.',                   cat: 'accessories' },
  { img: 'Assets/Maintenance_Bag.jpg',      num: '11', title: 'MAINTENANCE\nRUG',        desc: 'Work clean under any vehicle. Waterproof mat with carry handles.',                cat: 'accessories' },
  { img: 'Assets/Oilskin_Cap_F.jpg',        num: '12', title: 'OILSKIN\nCAP',            desc: 'Dark oilskin with embroidered buffalo logo. Unisex, one size fits most.',         cat: 'apparel' },
];

/* ── CART ───────────────────────────────────────────────*/
let cart = JSON.parse(localStorage.getItem('ww_cart') || '[]');
let activeFilter = 'all';
let pmQtyVal = 1;
let modalGalleryIndex = 0;

function saveCart(){ localStorage.setItem('ww_cart', JSON.stringify(cart)); }

function catLabel(cat){
  return { bags:'Bags', firearms:'Firearms', ammo:'Ammo', accessories:'Accessories', apparel:'Apparel' }[cat] || cat;
}

/* ── RENDER PRODUCTS ────────────────────────────────────*/
function buildCard(p, i){
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.cat = p.cat;

  const hasSizePricing = p.options?.some(o => o.choices.some(c => typeof c === 'object' && c.price));
  const basePrice = hasSizePricing
    ? Math.min(...p.options.find(o => o.choices[0]?.price).choices.map(c => c.price))
    : p.price;
  const priceDisplay = hasSizePricing ? `From R${basePrice.toLocaleString()}` : `R${p.price.toLocaleString()}`;

  card.innerHTML = `
    <div class="product-img-wrap" onclick="openProductModal(${p.id})" style="cursor:pointer">
      <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      ${p.imgs.length > 1 ? `<span class="img-count-badge">+${p.imgs.length - 1} photos</span>` : ''}
      <div class="product-img-overlay"><span>View Options</span></div>
    </div>
    <div class="product-body">
      <div class="product-cat">${catLabel(p.cat)}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-footer">
        <div class="product-price">${priceDisplay}</div>
        <button class="add-cart-btn" onclick="openProductModal(${p.id})">
          ${p.options ? 'Select Options' : 'Add to Cart'}
        </button>
      </div>
    </div>`;
  return card;
}

function renderProducts(filter = 'all'){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);
  list.forEach((p, i) => {
    const card = buildCard(p, i);
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 70 + 60);
  });
}

/* ── FILTERS ────────────────────────────────────────────*/
document.getElementById('filterRow').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  renderProducts(activeFilter);
});

function filterAndScroll(cat){
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  renderProducts(cat);
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

/* ── SEARCH ─────────────────────────────────────────────*/
function doSearch(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q){ renderProducts(activeFilter); return; }
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const res = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  );
  if(!res.length){
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;padding:40px 0;font-size:0.9rem">No products matched your search.</p>';
    return;
  }
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
  res.forEach((p, i) => {
    const card = buildCard(p, i);
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 70 + 60);
  });
}
document.getElementById('searchInput').addEventListener('keydown', e => { if(e.key === 'Enter') doSearch(); });

/* ── PRODUCT MODAL ──────────────────────────────────────*/
function openProductModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  document.getElementById('pmBackdrop').classList.add('open');
  const modal = document.getElementById('productModal');
  const body  = document.getElementById('productModalBody');
  modalGalleryIndex = 0;
  pmQtyVal = 1;

  const hasSizePricing = p.options?.some(o => o.choices.some(c => typeof c === 'object'));
  const basePrice = hasSizePricing
    ? Math.min(...p.options.find(o => o.choices[0]?.price).choices.map(c => c.price))
    : p.price;

  const colourMap = {
    'Black': '#111111', 'Gloss Black': '#1a1a1a', 'Sandpaper Black': '#2d2d2d',
    'Khaki / Tan': '#c8a86b', 'Tan / Coyote': '#c8a86b', 'OD Green': '#4a5240',
    'Olive / Grey': '#5a5f4e', 'Beige': '#d4c5a9', 'Blue': '#2a4a7a',
  };

  const optionsHTML = p.options ? p.options.map((opt, oi) => `
    <div class="variant-group">
      <div class="variant-label">${opt.name}</div>
      <div class="variant-choices" data-opt="${oi}">
        ${opt.choices.map((c, ci) => {
          const label = typeof c === 'object' ? c.label : c;
          const isColour = opt.name.toLowerCase() === 'colour';
          return isColour
            ? `<button class="variant-chip colour-chip${ci===0?' selected':''}" data-ci="${ci}"
                style="--chip-colour:${colourMap[label]||'#555'}" title="${label}">
                <span class="colour-swatch"></span><span>${label}</span>
               </button>`
            : `<button class="variant-chip${ci===0?' selected':''}" data-ci="${ci}">${label}</button>`;
        }).join('')}
      </div>
    </div>`).join('') : '';

  /* Gallery thumbnails */
  const thumbsHTML = p.imgs.length > 1
    ? `<div class="pm-thumbs" id="pmThumbs">
        ${p.imgs.map((img, i) => `
          <div class="pm-thumb${i===0?' active':''}" onclick="setModalImg(${i})" data-i="${i}">
            <img src="${img}" alt="${p.name} ${i+1}">
          </div>`).join('')}
       </div>`
    : '';

  body.innerHTML = `
    <div class="pm-img-side">
      <div class="pm-img-wrap">
        <img src="${p.imgs[0]}" alt="${p.name}" id="pmMainImg">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        ${p.imgs.length > 1 ? `
          <button class="pm-img-arrow pm-img-prev" onclick="shiftModalImg(-1)">&#8592;</button>
          <button class="pm-img-arrow pm-img-next" onclick="shiftModalImg(1)">&#8594;</button>
          <div class="pm-img-counter" id="pmImgCounter">1 / ${p.imgs.length}</div>
        ` : ''}
      </div>
      ${thumbsHTML}
    </div>
    <div class="pm-info">
      <div class="product-cat">${catLabel(p.cat)}</div>
      <h2 class="pm-title">${p.name}</h2>
      <div class="pm-price" id="pmPrice">R${basePrice.toLocaleString()}</div>
      <p class="pm-desc">${p.desc}</p>
      ${optionsHTML ? `<div class="pm-options">${optionsHTML}</div>` : ''}
      <div class="pm-actions">
        <div class="pm-qty-wrap">
          <button class="qty-btn" onclick="pmQty(-1)">−</button>
          <span class="qty-num" id="pmQty">1</span>
          <button class="qty-btn" onclick="pmQty(1)">+</button>
        </div>
        <button class="add-cart-btn pm-add-btn" onclick="addToCartFromModal(${p.id})">Add to Cart</button>
      </div>
    </div>`;

  /* Variant chip listeners */
  body.querySelectorAll('.variant-choices').forEach(group => {
    group.querySelectorAll('.variant-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        updateModalPrice(p);
      });
    });
  });

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setModalImg(i){
  const p = products.find(x => x.id === parseInt(document.querySelector('.pm-add-btn')?.getAttribute('onclick')?.match(/\d+/)?.[0]));
  // Simpler: just read from DOM
  const mainImg = document.getElementById('pmMainImg');
  const thumbs  = document.querySelectorAll('.pm-thumb');
  const counter = document.getElementById('pmImgCounter');
  if(!mainImg) return;

  thumbs.forEach(t => t.classList.toggle('active', parseInt(t.dataset.i) === i));
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = thumbs[i]?.querySelector('img')?.src || mainImg.src;
    mainImg.style.opacity = '1';
    modalGalleryIndex = i;
    if(counter) counter.textContent = `${i + 1} / ${thumbs.length}`;
  }, 150);
}

function shiftModalImg(delta){
  const thumbs = document.querySelectorAll('.pm-thumb');
  if(!thumbs.length) return;
  const next = (modalGalleryIndex + delta + thumbs.length) % thumbs.length;
  setModalImg(next);
}

function updateModalPrice(p){
  const sizeOpt = p.options?.find(o => o.choices.some(c => typeof c === 'object'));
  let price = p.price;
  if(sizeOpt){
    const oi = p.options.indexOf(sizeOpt);
    const sel = document.querySelector(`.variant-choices[data-opt="${oi}"] .variant-chip.selected`);
    if(sel) price = sizeOpt.choices[parseInt(sel.dataset.ci)].price;
  }
  document.getElementById('pmPrice').textContent = `R${price.toLocaleString()}`;
}

function pmQty(delta){
  pmQtyVal = Math.max(1, pmQtyVal + delta);
  document.getElementById('pmQty').textContent = pmQtyVal;
}

function addToCartFromModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  const selectedVariants = [];
  let price = p.price;

  if(p.options){
    p.options.forEach((opt, oi) => {
      const sel = document.querySelector(`.variant-choices[data-opt="${oi}"] .variant-chip.selected`);
      if(sel){
        const ci = parseInt(sel.dataset.ci);
        const choice = opt.choices[ci];
        const label = typeof choice === 'object' ? choice.label : choice;
        if(typeof choice === 'object' && choice.price) price = choice.price;
        selectedVariants.push(`${opt.name}: ${label}`);
      }
    });
  }

  const variantLabel = selectedVariants.join(' · ');
  const cartKey = `${id}-${variantLabel}`;
  const qty = pmQtyVal || 1;
  const existing = cart.find(x => x.cartKey === cartKey);
  if(existing) existing.qty += qty;
  else cart.push({ cartKey, id, name: p.name, price, img: p.imgs[0], qty, variantLabel });

  saveCart();
  updateCartUI();
  closeProductModal();
  openCart();
  pmQtyVal = 1;
}

function closeProductModal(){
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('pmBackdrop').classList.remove('open');
  document.body.style.overflow = '';
  pmQtyVal = 1;
}

/* ── CART UI ────────────────────────────────────────────*/
function updateCartUI(){
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.style.display = count ? 'flex' : 'none';
  document.getElementById('cartTotal').textContent = `R${total.toLocaleString()}`;

  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  if(!cart.length){
    emptyEl.style.display = 'block';
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }
  emptyEl.style.display = 'none';
  itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.variantLabel ? `<div class="cart-item-variant">${item.variantLabel}</div>` : ''}
        <div class="cart-item-price">R${item.price.toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.cartKey}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.cartKey}',1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeItem('${item.cartKey}')">✕</button>`;
    itemsEl.appendChild(div);
  });
}

function changeQty(cartKey, delta){
  const item = cart.find(x => x.cartKey === cartKey);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(x => x.cartKey !== cartKey);
  saveCart(); updateCartUI();
}
function removeItem(cartKey){
  cart = cart.filter(x => x.cartKey !== cartKey);
  saveCart(); updateCartUI();
}
function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('open');
}

/* ── CHECKOUT ───────────────────────────────────────────*/
function openCheckout(){
  if(!cart.length){ alert('Your cart is empty!'); return; }
  closeCart();
  buildOrderSummary();
  document.getElementById('checkoutBackdrop').classList.add('open');
  document.getElementById('checkoutForm').style.display = 'block';
  document.getElementById('successMsg').style.display = 'none';
}
function closeCheckout(){
  document.getElementById('checkoutBackdrop').classList.remove('open');
}
function buildOrderSummary(){
  const sum = document.getElementById('orderSummary');
  const shipping = 120;
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  sum.innerHTML = cart.map(i => `
    <div class="order-line">
      <span>${i.name}${i.variantLabel ? ` <em style="color:var(--muted);font-size:0.8em">(${i.variantLabel})</em>` : ''} × ${i.qty}</span>
      <span>R${(i.price * i.qty).toLocaleString()}</span>
    </div>`).join('') +
  `<hr class="order-divider">
   <div class="order-line"><span>Shipping</span><span>R${shipping}</span></div>
   <div class="order-total"><span>Total</span><span>R${(subtotal + shipping).toLocaleString()}</span></div>`;
}

/* ── PAYFAST ────────────────────────────────────────────*/
const PF = {
  SANDBOX      : true,
  MERCHANT_ID  : '10000100',
  MERCHANT_KEY : '46f0cd694581a',
  PASSPHRASE   : '',
  RETURN_URL   : window.location.origin + '/thank-you.html',
  CANCEL_URL   : window.location.href,
  NOTIFY_URL   : '',
};
function pfQueryString(params){
  return Object.entries(params)
    .filter(([,v]) => v !== '' && v !== null && v !== undefined)
    .map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v).trim())}`)
    .join('&');
}
function md5(str){
  function safeAdd(x,y){let lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}
  function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}
  function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}
  function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|((~b)&d),a,b,x,s,t)}
  function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&(~d)),a,b,x,s,t)}
  function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}
  function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|(~d)),a,b,x,s,t)}
  str = unescape(encodeURIComponent(str));
  let n=str.length,state=[1732584193,-271733879,-1732584194,271733878],i;
  let blk=new Array(Math.ceil((n+9)/64)*16).fill(0);
  for(i=0;i<n;i++)blk[i>>2]|=str.charCodeAt(i)<<((i%4)*8);
  blk[i>>2]|=0x80<<((i%4)*8);blk[blk.length-2]=n*8;
  for(i=0;i<blk.length;i+=16){
    let[a,b,c,d]=state;
    a=md5ff(a,b,c,d,blk[i+0],7,-680876936);d=md5ff(d,a,b,c,blk[i+1],12,-389564586);c=md5ff(c,d,a,b,blk[i+2],17,606105819);b=md5ff(b,c,d,a,blk[i+3],22,-1044525330);
    a=md5ff(a,b,c,d,blk[i+4],7,-176418897);d=md5ff(d,a,b,c,blk[i+5],12,1200080426);c=md5ff(c,d,a,b,blk[i+6],17,-1473231341);b=md5ff(b,c,d,a,blk[i+7],22,-45705983);
    a=md5ff(a,b,c,d,blk[i+8],7,1770035416);d=md5ff(d,a,b,c,blk[i+9],12,-1958414417);c=md5ff(c,d,a,b,blk[i+10],17,-42063);b=md5ff(b,c,d,a,blk[i+11],22,-1990404162);
    a=md5ff(a,b,c,d,blk[i+12],7,1804603682);d=md5ff(d,a,b,c,blk[i+13],12,-40341101);c=md5ff(c,d,a,b,blk[i+14],17,-1502002290);b=md5ff(b,c,d,a,blk[i+15],22,1236535329);
    a=md5gg(a,b,c,d,blk[i+1],5,-165796510);d=md5gg(d,a,b,c,blk[i+6],9,-1069501632);c=md5gg(c,d,a,b,blk[i+11],14,643717713);b=md5gg(b,c,d,a,blk[i+0],20,-373897302);
    a=md5gg(a,b,c,d,blk[i+5],5,-701558691);d=md5gg(d,a,b,c,blk[i+10],9,38016083);c=md5gg(c,d,a,b,blk[i+15],14,-660478335);b=md5gg(b,c,d,a,blk[i+4],20,-405537848);
    a=md5gg(a,b,c,d,blk[i+9],5,568446438);d=md5gg(d,a,b,c,blk[i+14],9,-1019803690);c=md5gg(c,d,a,b,blk[i+3],14,-187363961);b=md5gg(b,c,d,a,blk[i+8],20,1163531501);
    a=md5gg(a,b,c,d,blk[i+13],5,-1444681467);d=md5gg(d,a,b,c,blk[i+2],9,-51403784);c=md5gg(c,d,a,b,blk[i+7],14,1735328473);b=md5gg(b,c,d,a,blk[i+12],20,-1926607734);
    a=md5hh(a,b,c,d,blk[i+5],4,-378558);d=md5hh(d,a,b,c,blk[i+8],11,-2022574463);c=md5hh(c,d,a,b,blk[i+11],16,1839030562);b=md5hh(b,c,d,a,blk[i+14],23,-35309556);
    a=md5hh(a,b,c,d,blk[i+1],4,-1530992060);d=md5hh(d,a,b,c,blk[i+4],11,1272893353);c=md5hh(c,d,a,b,blk[i+7],16,-155497632);b=md5hh(b,c,d,a,blk[i+10],23,-1094730640);
    a=md5hh(a,b,c,d,blk[i+13],4,681279174);d=md5hh(d,a,b,c,blk[i+0],11,-358537222);c=md5hh(c,d,a,b,blk[i+3],16,-722521979);b=md5hh(b,c,d,a,blk[i+6],23,76029189);
    a=md5hh(a,b,c,d,blk[i+9],4,-640364487);d=md5hh(d,a,b,c,blk[i+12],11,-421815835);c=md5hh(c,d,a,b,blk[i+15],16,530742520);b=md5hh(b,c,d,a,blk[i+2],23,-995338651);
    a=md5ii(a,b,c,d,blk[i+0],6,-198630844);d=md5ii(d,a,b,c,blk[i+7],10,1126891415);c=md5ii(c,d,a,b,blk[i+14],15,-1416354905);b=md5ii(b,c,d,a,blk[i+5],21,-57434055);
    a=md5ii(a,b,c,d,blk[i+12],6,1700485571);d=md5ii(d,a,b,c,blk[i+3],10,-1894986606);c=md5ii(c,d,a,b,blk[i+10],15,-1051523);b=md5ii(b,c,d,a,blk[i+1],21,-2054922799);
    a=md5ii(a,b,c,d,blk[i+8],6,1873313359);d=md5ii(d,a,b,c,blk[i+15],10,-30611744);c=md5ii(c,d,a,b,blk[i+6],15,-1560198380);b=md5ii(b,c,d,a,blk[i+13],21,1309151649);
    a=md5ii(a,b,c,d,blk[i+4],6,-145523070);d=md5ii(d,a,b,c,blk[i+11],10,-1120210379);c=md5ii(c,d,a,b,blk[i+2],15,718787259);b=md5ii(b,c,d,a,blk[i+9],21,-343485551);
    state[0]=safeAdd(a,state[0]);state[1]=safeAdd(b,state[1]);state[2]=safeAdd(c,state[2]);state[3]=safeAdd(d,state[3]);
  }
  return state.map(n=>('0'+((n&0xFF).toString(16))).slice(-2)+('0'+(((n>>8)&0xFF).toString(16))).slice(-2)+('0'+(((n>>16)&0xFF).toString(16))).slice(-2)+('0'+(((n>>24)&0xFF).toString(16))).slice(-2)).join('');
}
function placeOrder(){
  const req = ['co-fname','co-lname','co-email','co-addr','co-city','co-prov','co-zip'];
  for(const id of req){
    const el = document.getElementById(id);
    if(!el || !el.value.trim()){ if(el){el.focus();el.style.borderColor='#e05';setTimeout(()=>el.style.borderColor='',1500);} return; }
  }
  const shipping = 120;
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const total = subtotal + shipping;
  const orderId = 'WW-' + Date.now();
  const itemDesc = cart.map(i => `${i.name}${i.variantLabel?' ('+i.variantLabel+')':''} x${i.qty}`).join(', ').slice(0,255);
  const fname = document.getElementById('co-fname').value.trim();
  const lname = document.getElementById('co-lname').value.trim();
  const email = document.getElementById('co-email').value.trim();
  const pfData = {
    merchant_id: PF.MERCHANT_ID, merchant_key: PF.MERCHANT_KEY,
    return_url: PF.RETURN_URL, cancel_url: PF.CANCEL_URL,
    ...(PF.NOTIFY_URL ? {notify_url: PF.NOTIFY_URL} : {}),
    name_first: fname, name_last: lname, email_address: email,
    m_payment_id: orderId, amount: total.toFixed(2),
    item_name: 'Wilde Winkel Order ' + orderId, item_description: itemDesc,
    email_confirmation: '1', confirmation_address: email,
  };
  const sigString = pfQueryString(pfData) + (PF.PASSPHRASE ? `&passphrase=${encodeURIComponent(PF.PASSPHRASE.trim())}` : '');
  pfData.signature = md5(sigString);
  const form = document.getElementById('payfastForm');
  form.innerHTML = '';
  form.action = PF.SANDBOX ? 'https://sandbox.payfast.co.za/eng/process' : 'https://www.payfast.co.za/eng/process';
  Object.entries(pfData).forEach(([k,v]) => {
    const input = document.createElement('input');
    input.type = 'hidden'; input.name = k; input.value = v;
    form.appendChild(input);
  });
  localStorage.setItem('ww_pending_order', orderId);
  form.submit();
}

/* ── CAROUSEL ───────────────────────────────────────────*/
(function(){
  const track    = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const fill     = document.getElementById('progressFill');
  const DURATION = 4500;
  let current = 0, timer = null;

  /* Build slides dynamically from carouselSlides data */
  carouselSlides.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <img src="${s.img}" alt="${s.title.replace('\n',' ')}">
      <div class="carousel-slide-overlay"></div>
      <div class="slide-info">
        <div class="slide-num">0${s.num} / 0${carouselSlides.length}</div>
        <div class="slide-title">${s.title.replace('\n','<br>')}</div>
        <div class="slide-desc">${s.desc}</div>
        <button class="slide-btn" onclick="filterAndScroll('${s.cat}')">View Products</button>
      </div>`;
    track.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const slides = track.querySelectorAll('.carousel-slide');

  function goTo(n){
    clearInterval(timer);
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}vw)`;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    startProgress();
    timer = setInterval(() => goTo(current + 1), DURATION);
  }

  function startProgress(){
    fill.style.transition = 'none'; fill.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${DURATION}ms linear`;
      fill.style.width = '100%';
    }));
  }

  document.getElementById('cNext').onclick = () => goTo(current + 1);
  document.getElementById('cPrev').onclick = () => goTo(current - 1);
  startProgress();
  timer = setInterval(() => goTo(current + 1), DURATION);
})();

/* ── INIT ───────────────────────────────────────────────*/
renderProducts();
updateCartUI();
/* ── COOKIE CONSENT ─────────────────────────────────────*/
(function(){
  const banner = document.getElementById('cookieBanner');
  if(!banner) return;
  if(!localStorage.getItem('ww_cookie_consent')){
    setTimeout(() => banner.classList.add('visible'), 400);
  }
})();

function acceptCookies(){
  localStorage.setItem('ww_cookie_consent', 'accepted');
  const b = document.getElementById('cookieBanner');
  b.classList.remove('visible');
}

function declineCookies(){
  localStorage.setItem('ww_cookie_consent', 'declined');
  const b = document.getElementById('cookieBanner');
  b.classList.remove('visible');
}

/* ── LEGAL MODALS ───────────────────────────────────────*/
const legalTitles = {
  privacy : 'PRIVACY POLICY',
  terms   : 'TERMS OF SERVICE',
  cookies : 'COOKIE POLICY',
};

function openLegalModal(type){
  const content = document.getElementById('legal-' + type);
  if(!content) return;
  document.getElementById('legalModalTitle').textContent = legalTitles[type];
  document.getElementById('legalModalBody').innerHTML = content.innerHTML;
  document.getElementById('legalBackdrop').classList.add('open');
  document.getElementById('legalModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegalModal(){
  document.getElementById('legalBackdrop').classList.remove('open');
  document.getElementById('legalModal').classList.remove('open');
  document.body.style.overflow = '';
}