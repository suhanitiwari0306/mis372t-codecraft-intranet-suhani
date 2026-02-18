export default function Header({ userName, page, onNavigate }) {
  return (
    <header className="header">
      <h1 className="title">
        Welcome <span className="userName">{userName}</span> to the CodeCraft Labs Intranet
      </h1>

      <nav className="nav">
        <button
          className={page === "home" ? "navLink active" : "navLink"}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>

        <button
          className={page === "employee" ? "navLink active" : "navLink"}
          onClick={() => onNavigate("employee")}
        >
          Employee Management
        </button>
      </nav>
    </header>
  );
}