export default function PageContent({ mainMarkup, runtimeMarkup }) {
  return <div className="tl-page-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `${mainMarkup}\n${runtimeMarkup}` }} />;
}
