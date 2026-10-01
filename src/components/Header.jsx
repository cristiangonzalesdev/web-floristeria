import { useState } from 'react';
import { Flower2, Menu, ShoppingBag, X } from 'lucide-react';

export default function Header({ cartCount, onCart }) {
  const [open, setOpen] = useState(false);
  const links = [['Inicio', '#inicio'], ['Catálogo', '#catalogo'], ['Dedicatoria', '#dedicatoria'], ['Nuestra esencia', '#nosotros']];
  return <header className="site-header">
    <a className="brand" href="#inicio" onClick={() => setOpen(false)}><span className="brand-mark"><Flower2 size={20} /></span><span><strong>sweet palace</strong><small>FLORES QUE HABLAN POR TI</small></span></a>
    <button className="menu-toggle icon-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'main-nav nav-open' : 'main-nav'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className="cart-button" onClick={onCart}><ShoppingBag size={18} /><span>Tu bolsa</span>{cartCount > 0 && <b>{cartCount}</b>}</button>
  </header>;
}
