import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowRight, BookOpen, Camera, Check, ChevronLeft, ChevronRight,
  Flower2, Heart, MessageCircle, Minus, Plus, ShoppingBag, Sparkles, Trash2, Truck, X,
} from 'lucide-react';
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import DedicationCard from './components/DedicationCard.jsx';
import { business, formatMoney, products } from './data/catalog';

const waLink = `https://wa.me/${business.phone}`;
const dedicationFonts = { serif: 'Elegante', script: 'Manuscrita', sans: 'Sencilla' };
const catalogPdf = '/catalogo/catalogo-completo.pdf';

function SectionTitle({ eyebrow, title, body, action }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}</div>{action}</div>;
}

function CartPanel({ cart, setCart, close, checkout }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasUnpriced = cart.some((item) => item.needsQuote);
  return <div className="overlay" onMouseDown={(event) => event.target === event.currentTarget && close()}>
    <aside className="cart-panel">
      <div className="panel-heading"><div><span className="eyebrow">TU SELECCIÓN</span><h2>Tu bolsa <span>({cart.reduce((n, item) => n + item.quantity, 0)})</span></h2></div><button className="icon-button" onClick={close} aria-label="Cerrar bolsa"><X /></button></div>
      {cart.length ? <>
        <div className="cart-items">{cart.map((item) => <article className="cart-item" key={item.id}>
          <img src={item.image} alt="" />
          <div className="cart-item-main"><strong>{item.name}</strong>
            {item.flowers && <small>{item.flowers.map((flower) => `${flower.quantity} ${flower.name}`).join(' · ')}</small>}
            <span>{item.needsQuote ? 'Precio por confirmar' : formatMoney(item.price)}</span>
            <div className="cart-item-actions"><div className="quantity-control compact">
              <button aria-label="Restar uno" onClick={() => setCart(cart.map((row) => row.id === item.id ? { ...row, quantity: Math.max(1, row.quantity - 1) } : row))}><Minus size={13} /></button>
              <span>{item.quantity}</span>
              <button aria-label="Sumar uno" onClick={() => setCart(cart.map((row) => row.id === item.id ? { ...row, quantity: row.quantity + 1 } : row))}><Plus size={13} /></button>
            </div><button className="remove-button" onClick={() => setCart(cart.filter((row) => row.id !== item.id))}><Trash2 size={14} /> Quitar</button></div>
          </div>
        </article>)}</div>
        <div className="cart-bottom"><div className="subtotal-line"><span>{hasUnpriced ? 'Subtotal de productos confirmados' : 'Subtotal de productos'}</span><strong>{hasUnpriced ? 'Parcial' : formatMoney(subtotal)}</strong></div>
          {hasUnpriced && <span className="secure-note">Algunos precios se confirman según diseño y disponibilidad.</span>}
          <p><Truck size={15} /> El costo de envío se confirma según la zona de entrega.</p>
          <button className="primary-button full-button" onClick={checkout}>Continuar al pedido <ArrowRight size={17} /></button><span className="secure-note">Sin cobro en línea · confirmaremos disponibilidad contigo</span>
        </div>
      </> : <div className="empty-cart"><span className="empty-bag"><ShoppingBag /></span><h3>Tu bolsa está esperando flores</h3><p>Encuentra el detalle perfecto y agrégalo aquí.</p><button className="outline-button" onClick={close}>Volver al catálogo</button></div>}
    </aside>
  </div>;
}

function Checkout({ cart, dedication, close, clearCart }) {
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState('Por confirmar');
  const [form, setForm] = useState({ buyer: '', phone: '', email: '', recipient: '', recipientPhone: '', address: '', neighborhood: '', city: '', date: '', instructions: '' });
  const earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate() + 3);
  const minDate = `${earliestDate.getFullYear()}-${String(earliestDate.getMonth() + 1).padStart(2, '0')}-${String(earliestDate.getDate()).padStart(2, '0')}`;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasUnpriced = cart.some((item) => item.needsQuote);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const sendOrder = (event) => {
    event.preventDefault();
    const items = cart.map((item) => `• ${item.quantity} × ${item.name} — ${item.needsQuote ? 'precio por confirmar' : formatMoney(item.price)}${item.flowers ? `\n  Flores: ${item.flowers.map((flower) => `${flower.quantity} ${flower.name}`).join(', ')}` : ''}`).join('\n');
    const subtotalLine = hasUnpriced ? `Subtotal de productos confirmados: ${formatMoney(subtotal)}\nAlgunos precios: por confirmar` : `Subtotal de productos: ${formatMoney(subtotal)}`;
    const card = dedication.text ? `DEDICATORIA · Letra ${dedicationFonts[dedication.font]}\n${dedication.text}` : 'DEDICATORIA\nSin mensaje personalizado';
    const text = `Hola 🌸 Quiero confirmar este pedido de Sweet Palace:\n\n${items}\n\n${subtotalLine}\nEnvío: por cotizar\nForma de pago preferida: ${payment}\n\n${card}\n\nCOMPRADOR\n${form.buyer} · ${form.phone}${form.email ? ` · ${form.email}` : ''}\n\nENTREGA\n${form.recipient} · ${form.recipientPhone}\n${form.address}, ${form.neighborhood}, ${form.city}\nFecha solicitada: ${form.date}\n${form.instructions ? `Indicaciones: ${form.instructions}\n` : ''}\nQuedo pendiente de confirmar disponibilidad, envío y valor final.`;
    window.open(`${waLink}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    clearCart();
    close();
  };

  return <div className="overlay modal-overlay" onMouseDown={(event) => event.target === event.currentTarget && close()}>
    <form className="checkout-modal" onSubmit={sendOrder}>
      <div className="panel-heading"><div><span className="eyebrow">CADA DETALLE, EN SU LUGAR</span><h2>Tu pedido <span>· {step} de 2</span></h2></div><button type="button" className="icon-button" onClick={close} aria-label="Cerrar pedido"><X /></button></div>
      <div className="checkout-progress"><i className="progress-active" /><i className={step > 1 ? 'progress-active' : ''} /></div>
      {step === 1 ? <div className="checkout-fields">
        <h3>Tus datos y la entrega</h3>
        <div className="form-grid">
          <label>Tu nombre<input required value={form.buyer} onChange={update('buyer')} autoComplete="name" /></label>
          <label>Tu teléfono<input required type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" /></label>
          <label className="span-two">Correo electrónico <span className="optional">(opcional)</span><input type="email" value={form.email} onChange={update('email')} autoComplete="email" /></label>
          <label>Nombre del destinatario<input required value={form.recipient} onChange={update('recipient')} /></label>
          <label>Teléfono del destinatario<input required type="tel" value={form.recipientPhone} onChange={update('recipientPhone')} /></label>
          <label className="span-two">Dirección de entrega<input required value={form.address} onChange={update('address')} placeholder="Calle, carrera, número…" /></label>
          <label>Barrio o sector<input required value={form.neighborhood} onChange={update('neighborhood')} /></label>
          <label>Ciudad<input required value={form.city} onChange={update('city')} /></label>
          <label className="delivery-date-field">Elige el día de entrega<input required type="date" min={minDate} value={form.date} onChange={update('date')} /><small>El catálogo recomienda agendar con al menos 3 días. Confirmaremos disponibilidad.</small></label>
          <label className="span-two">Indicaciones para la entrega <span className="optional">(opcional)</span><textarea value={form.instructions} onChange={update('instructions')} rows="2" /></label>
        </div>
        <div className="checkout-nav"><button type="button" className="outline-button" onClick={close}>Volver a la bolsa</button><button type="button" className="primary-button" onClick={(event) => { const invalid = event.currentTarget.form?.querySelector(':invalid'); if (invalid) invalid.reportValidity(); else setStep(2); }}>Continuar <ChevronRight size={16} /></button></div>
      </div> : <div className="checkout-fields">
        <button type="button" className="back-link" onClick={() => setStep(1)}><ChevronLeft size={15} /> Editar datos de entrega</button>
        <h3>Revisa tu pedido y elige cómo prefieres pagar</h3>
        <div className="review-box"><strong>{cart.reduce((n, item) => n + item.quantity, 0)} productos</strong><span>{hasUnpriced ? 'Total por confirmar' : formatMoney(subtotal)} <small>{hasUnpriced ? 'precios y envío se confirmarán' : '+ envío por confirmar'}</small></span><div>{form.recipient} · {form.address}, {form.city}<br />Entrega solicitada: {form.date}</div></div>
        <div className="review-dedication"><span>DEDICATORIA · LETRA {dedicationFonts[dedication.font]?.toUpperCase()}</span><p className={`card-font-${dedication.font}`}>{dedication.text || 'Sin mensaje personalizado'}</p></div>
        <div className="payment-options">{['Nequi', 'Tarjeta débito/crédito', 'PSE', 'Por confirmar'].map((option) => <label key={option} className={payment === option ? 'payment-option selected' : 'payment-option'}><input type="radio" name="payment" value={option} checked={payment === option} onChange={() => setPayment(option)} /><span className="radio-dot" /><span>{option}</span>{payment === option && <Check size={16} />}</label>)}</div>
        <p className="payment-note">Indica tu método preferido. Esta versión no procesa pagos en línea ni solicita datos de tarjeta; Sweet Palace confirmará el total y las instrucciones de pago.</p>
        <div className="checkout-nav"><button type="button" className="outline-button" onClick={() => setStep(1)}><ChevronLeft size={16} /> Anterior</button><button type="submit" className="primary-button">Enviar pedido por WhatsApp <ArrowRight size={16} /></button></div>
      </div>}
    </form>
  </div>;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [notice, setNotice] = useState('');
  const [dedication, setDedication] = useState({ text: '', font: 'serif' });
  const categories = useMemo(() => ['Todos', ...new Set(products.map((product) => product.category))], []);
  const filtered = activeCategory === 'Todos' ? products : products.filter((product) => product.category === activeCategory);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const elements = document.querySelectorAll('.hero-copy, .hero-visual, .promise-strip > div, .catalog-section > .section-heading, .product-card, .dedication-section > .section-heading, .dedication-editor, .dedication-preview-wrap, .occasion-copy, .occasion-tile, .about-photo, .about-copy, .social-section > *');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    elements.forEach((element, index) => {
      element.classList.add('scroll-rise');
      element.style.transitionDelay = `${(index % 3) * 70}ms`;
      if (!element.classList.contains('is-visible')) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [activeCategory]);

  const addItem = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
    });
    setNotice(`${product.name} se agregó a tu bolsa`);
    window.setTimeout(() => setNotice(''), 2600);
  };

  return <>
    <Header cartCount={cartCount} onCart={() => setCartOpen(true)} />
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy"><span className="eyebrow"><i /> FLORES PARA MOMENTOS QUE IMPORTAN</span><h1>Hay cosas que<br />el corazón dice<br /><em>con flores.</em></h1><p>Un detalle pensado con amor puede convertir cualquier día en un recuerdo para siempre.</p><div className="hero-actions"><a className="primary-button" href="#catalogo">Encuentra tu ramo <ArrowRight size={17} /></a><a className="hero-secondary" href="#dedicatoria"><span className="circle-arrow"><ArrowDown size={16} /></span> Escribe tu dedicatoria</a></div><div className="hero-note"><span className="avatar-stack"><b>✿</b><b>✿</b><b>✿</b></span><span>Hechos con cuidado,<br /><strong>flor por flor</strong></span></div></div>
        <div className="hero-visual"><img src="/catalogo/rosas-mixtas.jpg" alt="Ramo colorido de rosas y flores frescas" /><div className="image-note"><span>✳</span><div><strong>Un detalle inolvidable</strong><small>hecho especialmente para ti</small></div></div><span className="hero-stamp">SWEET<br /><i>✿</i><br />PALACE</span></div>
        <span className="hero-scroll">DESLIZA PARA DESCUBRIR <span /></span>
      </section>

      <section className="promise-strip"><div><Flower2 /><span>Arreglos hechos a mano</span></div><i /><div><Heart /><span>Dedicatoria en tu ramo</span></div><i /><div><Truck /><span>Entrega coordinada contigo</span></div></section>

      <section className="catalog-section section-shell" id="catalogo">
        <SectionTitle eyebrow="UNA FLOR DICE MUCHO" title={<>Detalles para cada <em>momento</em></>} body="Encuentra ese arreglo que dice justo lo que estás sintiendo." action={<a className="view-all" href={catalogPdf} target="_blank" rel="noreferrer">Ver catálogo completo <BookOpen size={16} /></a>} />
        <div className="category-tabs">{categories.map((category) => <button key={category} className={activeCategory === category ? 'category-tab active' : 'category-tab'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={addItem} />)}</div>
        <p className="availability-note"><Sparkles size={16} /> Algunas flores dependen de disponibilidad. Confirma el precio de seis tulipanes antes de realizar tu pedido.</p>
        <a className="catalog-cta" href={catalogPdf} target="_blank" rel="noreferrer"><BookOpen size={17} /> Explorar las 21 páginas del catálogo <ArrowRight size={16} /></a>
      </section>

      <DedicationCard value={dedication} onChange={setDedication} />

      <section className="occasion-section"><div className="occasion-copy"><span className="eyebrow">NO HACE FALTA UNA FECHA ESPECIAL</span><h2>Haz que un día<br />cualquiera se sienta <em>especial.</em></h2><p>Cumpleaños, aniversarios, agradecimientos o simplemente porque sí. Las flores encuentran su momento en cualquier historia.</p><a className="text-action" href="#catalogo">Encuentra tu próximo detalle <ArrowRight size={16} /></a></div><div className="occasion-tiles"><a href="#catalogo" className="occasion-tile tile-birthday"><img src="/catalogo/tulipanes.jpg" alt="Ramo para celebrar" /><span><small>PARA CELEBRAR</small><strong>Un año más<br />de momentos</strong><ArrowRight size={17} /></span></a><a href="#catalogo" className="occasion-tile tile-justbecause"><img src="/catalogo/girasoles.jpg" alt="Flores para sorprender" /><span><small>PORQUE SÍ</small><strong>La sorpresa<br />más bonita</strong><ArrowRight size={17} /></span></a></div></section>

      <section className="about-section section-shell" id="nosotros"><div className="about-photo"><img src="/catalogo/rosas-coreanas.jpg" alt="Arreglo floral de Sweet Palace" /><div className="about-seal"><Flower2 size={20} /><span>Hecho con<br />mucho amor</span></div></div><div className="about-copy"><span className="eyebrow">UN POQUITO DE NUESTRA ESENCIA</span><h2>Las flores se marchitan.<br />Lo que te hicieron sentir, <em>no.</em></h2><p>En Sweet Palace creemos que cada flor puede decir eso que a veces cuesta poner en palabras. Preparamos cada arreglo pensando en la persona que lo va a recibir y en el momento que quieres crear.</p><div className="about-signature">Con cariño, <span>Sweet Palace</span></div><a className="outline-button" href={waLink} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Conócenos por WhatsApp</a></div></section>

      <section className="social-section">
        <span className="eyebrow">FLORES, MOMENTOS Y MUCHO AMOR</span>
        <h2>Un poquito de <em>@sweetpalace_sp</em></h2>
        <p>Así preparamos detalles para convertir cualquier día en un recuerdo.</p>
        <div className="tiktok-video-frame">
          <iframe
            src={`https://www.tiktok.com/player/v1/${business.tiktokVideoId}?controls=1&description=1`}
            title="Video de Sweet Palace en TikTok: ramo de rosas mixtas, lirios y perrito"
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="social-links"><a href={business.instagram} target="_blank" rel="noreferrer"><Camera /> Instagram <ArrowRight size={15} /></a><a href={`https://www.tiktok.com/@sweetpalacesp/video/${business.tiktokVideoId}`} target="_blank" rel="noreferrer"><span className="tiktok-glyph">♪</span> Ver en TikTok <ArrowRight size={15} /></a></div>
      </section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Flower2 size={20} /></span><span><strong>sweet palace</strong><small>FLORES QUE HABLAN POR TI</small></span></a><span>Un detalle, mil emociones. <i>♡</i></span><nav><a href="#catalogo">Catálogo</a><a href="#dedicatoria">Dedicatoria</a><a href={waLink} target="_blank" rel="noreferrer">Contacto</a></nav><small>© {new Date().getFullYear()} Sweet Palace · Hecho con amor</small></footer>
    <a className="floating-whatsapp" href={waLink} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp"><MessageCircle size={21} /><span>¿Te ayudamos?</span></a>
    {cartOpen && <CartPanel cart={cart} setCart={setCart} close={() => setCartOpen(false)} checkout={() => { setCartOpen(false); setCheckout(true); }} />}
    {checkout && <Checkout cart={cart} dedication={dedication} close={() => setCheckout(false)} clearCart={() => setCart([])} />}
    {notice && <div className="toast"><Check size={17} />{notice}<button aria-label="Cerrar aviso" onClick={() => setNotice('')}><X size={15} /></button><button className="toast-cart" onClick={() => { setNotice(''); setCartOpen(true); }}>Ver bolsa</button></div>}
  </>;
}
