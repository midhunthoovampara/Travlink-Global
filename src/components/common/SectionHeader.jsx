export default function SectionHeader({ label, title, description, className = "" }) {
  return <header className={className}>{label ? <span className="tl-section-label">{label}</span> : null}<h2 className="tl-title">{title}</h2>{description ? <p className="tl-text">{description}</p> : null}</header>;
}
