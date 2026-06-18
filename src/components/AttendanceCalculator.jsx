import { useState } from "react";

function AttendanceCalculator() {
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");

  const percentage =
    total > 0 ? ((attended / total) * 100).toFixed(2) : 0;

  return (
    <div className="card">
      <h2>Attendance Calculator</h2>

      <input
        type="number"
        placeholder="Classes Attended"
        value={attended}
        onChange={(e) => setAttended(e.target.value)}
      />

      <input
        type="number"
        placeholder="Total Classes"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />

      <h3>Attendance: {percentage}%</h3>

      {percentage < 75 ? (
        <p style={{ color: "red" }}>
          ⚠ Attendance Shortage
        </p>
      ) : (
        <p style={{ color: "green" }}>
          ✅ Attendance Safe
        </p>
      )}
    </div>
  );
}

export default AttendanceCalculator;