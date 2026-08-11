export default function ServiceNavigation({ items }) {
  return <nav aria-label="Service navigation"><ul>{items.map((item) => <li key={item.id}><a href={item.href}>{item.label}</a></li>)}</ul></nav>;
}
