export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  return <a href={href} className={`tl-btn tl-btn--${variant} ${className}`.trim()} {...props}>{children}</a>;
}
