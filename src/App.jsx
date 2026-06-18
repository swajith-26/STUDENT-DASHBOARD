import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AttendanceCalculator from "./components/AttendanceCalculator";
import SubjectList from "./components/SubjectList";
import StudyProgress from "./components/StudyProgress";
import TaskManager from "./components/TaskManager";
import Quote from "./components/Quote";
import FocusTimer from "./components/FocusTimer";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;

      case "attendance":
        return <AttendanceCalculator />;

      case "subjects":
        return <SubjectList />;

      case "progress":
        return <StudyProgress />;

      case "tasks":
        return <TaskManager />;

      case "timer":
        return <FocusTimer />;

      case "quote":
        return <Quote />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={darkMode ? "app dark-theme" : "app"}>
      <Header />

      <div className="container">
        <div className="sidebar">
          

          <button onClick={() => setActivePage("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setActivePage("profile")}>
            Profile
          </button>

          <button onClick={() => setActivePage("attendance")}>
            Attendance
          </button>

          <button onClick={() => setActivePage("subjects")}>
            Subjects
          </button>

          <button onClick={() => setActivePage("progress")}>
            Progress
          </button>

          <button onClick={() => setActivePage("tasks")}>
            Tasks
          </button>

          <button onClick={() => setActivePage("timer")}>
            Timer
          </button>

          <button onClick={() => setActivePage("quote")}>
            Quote
          </button>

          <button onClick={toggleTheme}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;