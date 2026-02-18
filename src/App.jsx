import { useState } from "react";
import "./App.css";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";

import EmployeeManagement from "./pages/EmployementManagement.jsx";

import EmployeeDetails from "./pages/EmployeeDetails.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [engagementCount, setEngagementCount] = useState(0);

  const userName = "Suhani";

  function increaseEngagement() {
    setEngagementCount((prev) => prev + 1);
  }

  return (
    <>
      <Header userName={userName} page={page} onNavigate={setPage} />

      {page === "home" && <Home userName={userName} />}
      {page === "employees" && (
        <EmployeeManagement
          engagementCount={engagementCount}
          onIncrease={increaseEngagement}
          onViewDetails={() => setPage("details")}
        />
      )}
      {page === "details" && (
        <EmployeeDetails
          userName={userName}
          engagementCount={engagementCount}
          onIncrease={increaseEngagement}
        />
      )}

      <Footer />
    </>
  );
}