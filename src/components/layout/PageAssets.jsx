export default function PageAssets({ pageKey, stylesheets, inlineStyles }) {
  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="travlink-page" />
      ))}
      {inlineStyles.map((css, index) => (
        <style key={`${pageKey}-${index}`} href={`travlink-inline-${pageKey}-${index}`} precedence="travlink-page">
          {css}
        </style>
      ))}
    </>
  );
}
