"use client";

const education = [
  {
    year: "2020",
    title: "Class X – CBSE",
    school: "Public School, Kharod, Ankleshwar",
    score: "92%",
  },
  {
    year: "2022",
    title: "Class XII – CBSE",
    school: "Scholars English Academy, Surat",
    score: "CGPA: 9",
  },
  {
    year: "2026",
    title: "B.E. Information Technology",
    school: "MVSR Engineering College, Hyderabad",
    score: "CGPA: 9.2",
  },
];

export default function Study() {
  return (
    <section className="study">
      <div className="study-header">
        <p className="study-tag">EDUCATION</p>
        <h2 className="study-title">My Academic Journey</h2>
      </div>

      <div className="timeline-curve">

  {/* ✅ REAL CURVED PATH */}
  <svg
    className="curve-svg"
    viewBox="0 0 1000 300"
    preserveAspectRatio="none"
  >
    <path
  d="M 50 220 Q 500 40 800 190"
  fill="transparent"
  stroke="#ccc"
  strokeWidth="3"
  strokeDasharray="6 10"
/>
  </svg>

  {education.map((item, index) => (
    <div key={index} className={`curve-step step-${index}`}>
      <div className="circle-card">
        <div className="study-content">
          <span className="year">{item.year}</span>
          <h3>{item.title}</h3>
          <p>{item.school}</p>
          <span className="score">{item.score}</span>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}