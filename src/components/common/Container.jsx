export default function Container({ as: Element = "div", className = "", children, ...props }) {
  return <Element className={`tl-container ${className}`.trim()} {...props}>{children}</Element>;
}
