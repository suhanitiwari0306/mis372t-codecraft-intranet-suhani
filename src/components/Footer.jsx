export default function Footer({ company }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">© {year} {company}. All rights reserved.</div>
    </footer>
  );
}