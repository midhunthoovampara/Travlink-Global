export default function Image({ alt = "", ...props }) {
  // Native images retain the legacy site's exact sizing and loading behavior.
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} {...props} />;
}
