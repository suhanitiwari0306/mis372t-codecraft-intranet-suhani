import { useState } from "react";
import SectionCard from "../components/Sectioncard";
import happyhour1 from "../assets/happyhour1.jpg";
import happyhour2 from "../assets/happyhour2.jpg";

export default function Home({ userName }) {

  const [message, setMessage] = useState("");

  const highlights = [
    "Relentless Learning and Growth",
    "Creative Problem Solving",
    "Curiosity Driven Exploration",
  ];

  const events = [
    "Feb 7: Employee Hack-a-thon",
    "Mar 7: Food Bank Volunteering",
    "Apr 4: Company Retreat",
    "May 5: Annual Picnic",
  ];

  const sayHello = () => {
    setMessage(`Hello ${userName}`);
  };

  return (
    <div className="stack">

      {/* VALUES BOX */}
      <SectionCard title="Remember to live out our values">
        <ul className="list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>

      {/* UPCOMING EVENTS BOX */}
      <SectionCard title="Upcoming Events">
        <ul className="list">
          {events.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* HELLO BUTTON */}
        <button className="helloBtn" onClick={sayHello}>
          Hello
        </button>

        {message && <p className="helloText">{message}</p>}
      </SectionCard>

      {/* LATEST EVENT BOX */}
      <SectionCard title="Latest Event">
        <p className="bodyText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Omnis animi laudantium eos atque sed debitis eum deleniti
          cumque saepe aut voluptatibus, dolores commodi corporis
          quibusdam numquam perferendis, molestias tenetur suscipit!.
        </p>

        <p className="eventSubtitle">Kickball outing Happy Hour</p>

        <div className="imageRow">
          <img className="eventImg" src={happyhour1} alt="Happy hour 1" />
          <img className="eventImg" src={happyhour2} alt="Happy hour 2" />
        </div>
      </SectionCard>

    </div>
  );
}