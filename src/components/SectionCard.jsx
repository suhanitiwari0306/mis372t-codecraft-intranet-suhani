export default function SectionCard({ title, subtitle, children }) {
  return (
    <section className="card">
      <h2 className="sectionTitle">{title}</h2>
      {subtitle ? <h3 className="sectionSubtitle">{subtitle}</h3> : null}
      {children}
    </section>
  );
}