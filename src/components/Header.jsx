export default function Header({ userName, page, onNavigate }) {
  const activeClass = (target) =>
    target === page ? "navLink navLinkActive" : "navLink";

  return (
    <header className="header">
      <div className="headerInner">
        <h1 className="headerTitle">
          Welcome <span className="userName">{userName}</span> to the CodeCraft Labs Intranet
        </h1>

        <nav className="nav">
          <button className={activeClass("home")} onClick={() => onNavigate("home")}>
            Home
          </button>

          <button className={activeClass("employees")} onClick={() => onNavigate("employees")}>
            Employee Management
          </button>

          <button className={activeClass("details")} onClick={() => onNavigate("details")}>
            Employee Details
          </button>
        </nav>
      </div>
    </header>
  );
}