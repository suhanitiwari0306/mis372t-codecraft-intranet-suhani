import { useState } from "react";
import SectionCard from "../components/Sectioncard";
export default function EmployeeManagement({ engagementCount, onIncrease, onViewDetails }) {
  const [employees, setEmployees] = useState([
    {
      first: "John",
      last: "Doe",
      address: "123 Main St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      email: "johndoe@example.com",
      salary: "$80,000",
    },
    {
      first: "Jane",
      last: "Smith",
      address: "456 Elm St",
      city: "New York",
      state: "NY",
      zip: "10001",
      email: "janesmith@example.com",
      salary: "$95,000",
    },
  ]);

  const [form, setForm] = useState({
    first: "",
    last: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    salary: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function addEmployee(e) {
    e.preventDefault();

    const newEmployee = {
      first: form.first.trim() || "New",
      last: form.last.trim() || "Employee",
      address: form.address.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      zip: form.zip.trim(),
      email: form.email.trim(),
      salary: form.salary.trim(),
    };

    setEmployees((prev) => [...prev, newEmployee]);

    setForm({
      first: "",
      last: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      salary: "",
    });
  }

  return (
    <div className="stack">
      <SectionCard title="Employee Management">
        <h3 className="sectionSubtitle" style={{ marginTop: 0 }}>
          Employee List
        </h3>

        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Email</th>
                <th>Salary</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, idx) => (
                <tr key={`${emp.email}-${idx}`}>
                  <td>{emp.first}</td>
                  <td>{emp.last}</td>
                  <td>{emp.address}</td>
                  <td>{emp.city}</td>
                  <td>{emp.state}</td>
                  <td>{emp.zip}</td>
                  <td>{emp.email}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="Add New Employee">
        <form onSubmit={addEmployee}>
          <div className="formGrid">
            <div className="field">
              <div className="label">First Name:</div>
              <input
                className="input"
                value={form.first}
                onChange={(e) => updateField("first", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">Last Name:</div>
              <input
                className="input"
                value={form.last}
                onChange={(e) => updateField("last", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">Address:</div>
              <input
                className="input"
                value={form.address}
                onChange={(e) => updateField("address", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">City:</div>
              <input
                className="input"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">State:</div>
              <input
                className="input"
                value={form.state}
                onChange={(e) => updateField("state", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">Zip Code:</div>
              <input
                className="input"
                value={form.zip}
                onChange={(e) => updateField("zip", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">Email:</div>
              <input
                className="input"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>

            <div className="field">
              <div className="label">Salary:</div>
              <input
                className="input"
                value={form.salary}
                onChange={(e) => updateField("salary", e.target.value)}
                placeholder="$80,000"
              />
            </div>
          </div>

          <div className="buttonRow">
            <button className="button" type="submit">
              Add Employee
            </button>
          </div>
        </form>
      </SectionCard>

      {/* NEW: Thursday-style state demo (shared counter + link to details page) */}
      <SectionCard title="Engagement Tracker">
        <p className="bodyText">
          Engagement Count: <strong>{engagementCount}</strong>
        </p>

        <div className="buttonRow">
          <button className="button" type="button" onClick={onIncrease}>
            Increase +
          </button>

          <button className="button" type="button" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </SectionCard>
    </div>
  );
}