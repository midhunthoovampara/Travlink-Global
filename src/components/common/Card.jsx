export default function Card({ as: Element = "article", className = "", children, ...props }) {
  return <Element className={`tl-card ${className}`.trim()} {...props}>{children}</Element>;
}
