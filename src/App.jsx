import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import EmployeeManagement from "./pages/EmployementManagement";
export default function App() {
  const [page, setPage] = useState("home");

  const userName = "Suhani";

  return (
    <>
      <Header userName={userName} page={page} onNavigate={setPage} />

      {page === "home"
        ? <Home userName={userName} />
        : <EmployeeManagement />}

      <Footer />
    </>
  );
}