import { useState } from "react";

function SubjectList() {
  const subjects = [
    {
      name: "FEDF",
      credits: 4,
    },
    {
      name: "Mathematics FOR COMMUNICATION SYSTEMS",
      credits: 3,
    },
    {
      name: "DSA 2",
      credits: 4,
    },
    {
      name: "CFAI",
      credits: 3,
    },
    {
      name: "JAPANESE",
      
      credits: 2,
    },
  ];

  const [search, setSearch] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>📚 Subjects</h2>

      <input
        type="text"
        placeholder="Search Subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="subject-grid">
        {filteredSubjects.map((subject, index) => (
          <div className="subject-card" key={index}>
            <h3>{subject.name}</h3>

            

            <p>
              Credits: {subject.credits}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectList;