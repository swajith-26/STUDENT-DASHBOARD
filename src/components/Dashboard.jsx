function Dashboard() {
  return (
    <>
      <h1>Welcome Swajith 👋</h1>

      <p>
        Track your attendance, tasks and
        learning progress.
      </p>

      <div className="cards">

        <div className="stat-card">
          <h3>Attendance</h3>
          <h1>82%</h1>
          <p>Current Semester</p>
        </div>

        <div className="stat-card">
          <h3>Subjects</h3>
          <h1>5</h1>
          <p>Registered</p>
        </div>

        <div className="stat-card">
          <h3>Tasks</h3>
          <h1>3</h1>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h3>Progress</h3>
          <h1>84%</h1>
          <p>Average Score</p>
        </div>

      </div>
    </>
  );
}

export default Dashboard;