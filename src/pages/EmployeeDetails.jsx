import SectionCard from "../components/Sectioncard";
export default function EmployeeDetails({ userName, engagementCount, onIncrease }) {
  return (
    <div className="stack">
      <SectionCard title="Employee Details" subtitle={`Hello ${userName}`}>
        <p className="bodyText">This page demonstrates state management with a shared engagement counter.</p>

        <h3>Engagement Count: {engagementCount}</h3>

        <div className="buttonRow">
          <button className="button" onClick={onIncrease}>
            Increase +
          </button>
        </div>
      </SectionCard>
    </div>
  );
}