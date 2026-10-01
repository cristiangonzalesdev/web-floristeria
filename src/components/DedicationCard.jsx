const fontOptions = [
  { id: 'serif', label: 'Elegante', className: 'card-font-serif' },
  { id: 'script', label: 'Manuscrita', className: 'card-font-script' },
  { id: 'sans', label: 'Sencilla', className: 'card-font-sans' },
];

export default function DedicationCard({ value, onChange }) {
  const selectedFont = fontOptions.find((font) => font.id === value.font) || fontOptions[0];
  const update = (key, nextValue) => onChange({ ...value, [key]: nextValue });

  return <section id="dedicatoria" className="dedication-section section-shell">
    <div className="section-heading">
      <div><span className="eyebrow">UNAS PALABRAS QUE SE QUEDAN</span><h2>Escribe tu <em>dedicatoria</em></h2><p>Tu mensaje irá dentro del ramo, en una tarjeta preparada para esa persona.</p></div>
      <span className="dedication-included">♡ <span>Una tarjeta incluida con tu arreglo</span></span>
    </div>
    <div className="dedication-layout">
      <div className="dedication-editor">
        <label className="editor-label">Elige el estilo de letra</label>
        <div className="font-options">{fontOptions.map((font) => <button key={font.id} type="button" onClick={() => update('font', font.id)} className={value.font === font.id ? 'font-option selected' : 'font-option'}><span className={font.className}>Aa</span><small>{font.label}</small></button>)}</div>
        <label className="editor-label message-label" htmlFor="card-message">Tu mensaje</label>
        <textarea id="card-message" value={value.text} maxLength={300} onChange={(event) => update('text', event.target.value)} placeholder="Escribe aquí eso que quieres decirle…" rows="5" />
        <div className="character-count">{value.text.length} / 300 caracteres</div>
        <p className="editor-hint">Podrás revisar esta dedicatoria en el resumen de tu pedido antes de enviarlo.</p>
      </div>
      <div className="dedication-preview-wrap"><span className="preview-label">VISTA PREVIA DE TU TARJETA</span><article className="dedication-preview"><span className="card-flower">✿</span><p className={selectedFont.className}>{value.text || 'Tu mensaje aparecerá aquí…'}</p><span className="card-endmark">con cariño <i>♡</i></span></article></div>
    </div>
  </section>;
}
