export default function QuickServiceItem({ icon, title, description }) {
  return <article className="tl-card"><i className={icon} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>;
}
