import { useState } from 'react';
import { Plus } from 'lucide-react';
import { formatMoney } from '../data/catalog';

export default function ProductCard({ product, onAdd }) {
  const initialVariant = product.variants?.[0];
  const [variantId, setVariantId] = useState(initialVariant?.id || '');
  const variant = product.variants?.find((item) => item.id === variantId);
  const displayedProduct = variant ? { ...product, ...variant, id: `${product.id}-${variant.id}`, name: `${product.name} · ${variant.label}` } : product;
  return <article className="product-card">
    <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" />{product.tag && <span className="product-tag">{product.tag}</span>}<button className="quick-add" aria-label={`Agregar ${displayedProduct.name}`} onClick={() => onAdd(displayedProduct)}><Plus size={18} /></button></div>
    <div className="product-info"><div className="product-heading"><h3>{product.name}</h3><strong>{formatMoney(displayedProduct.price)}</strong></div>{product.variants && <label className="variant-picker"><span>Presentación</span><select value={variantId} onChange={(event) => setVariantId(event.target.value)} aria-label={`Presentación de ${product.name}`}>{product.variants.map((item) => <option key={item.id} value={item.id}>{item.label} · {formatMoney(item.price)}</option>)}</select></label>}<p>{product.description}</p><div className="product-details">{product.details}</div>{variant?.note && <small className="product-variant-note">{variant.note}</small>}<button className="add-product-button" onClick={() => onAdd(displayedProduct)}><Plus size={14} /> Agregar a mi pedido</button></div>
  </article>;
}
