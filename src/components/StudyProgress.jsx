function StudyProgress() {
  const progressData = [
    { subject: "FEDF", progress: 90 },
    { subject: "Mathematics", progress: 80 },
    { subject: "Physics", progress: 75 },
    { subject: "Python", progress: 95 },
  ];

  const average =
    progressData.reduce(
      (sum, item) => sum + item.progress,
      0
    ) / progressData.length;

  return (
    <div className="card">
      <h2>📈 Study Progress</h2>

      {progressData.map((item, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px" }}
        >
          <p>
            {item.subject} ({item.progress}%)
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${item.progress}%`,
              }}
            ></div>
          </div>
        </div>
      ))}

      <h3>
        Overall Progress:
        {average.toFixed(2)}%
      </h3>
    </div>
  );
}

export default StudyProgress;