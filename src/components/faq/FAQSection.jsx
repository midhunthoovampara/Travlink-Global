export default function FAQSection({ items, title = "Frequently Asked Questions" }) {
  return <section className="tl-section" aria-labelledby="tl-faq-title"><div className="tl-container"><h2 id="tl-faq-title" className="tl-title">{title}</h2><div className="tl-faq">{items.map((item) => <details key={item.id} className="tl-card"><summary>{item.question}</summary><p className="tl-text">{item.answer}</p></details>)}</div></div></section>;
}
