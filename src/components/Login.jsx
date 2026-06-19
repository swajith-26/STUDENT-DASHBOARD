import { useState, useEffect } from "react";

function Login({ onLogin }) {
  const COLLEGE_ID = "2510040011";

  const [studentId, setStudentId] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginPassword, setLoginPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const savedPassword = localStorage.getItem("studentPassword");

    if (savedPassword) {
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    if (studentId !== COLLEGE_ID) {
      setError("Invalid Student ID");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem("studentPassword", password);

    alert("Password created successfully!");

    setIsRegistered(true);

    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (studentId !== COLLEGE_ID) {
      setError("Invalid Student ID");
      return;
    }

    const savedPassword =
      localStorage.getItem("studentPassword");

    if (loginPassword === savedPassword) {
      onLogin();
    } else {
      setError("Incorrect Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🎓 Student Portal</h1>
        <p>Student Learning Dashboard</p>

        {!isRegistered ? (
          <>
            <h3>Create Password</h3>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) =>
                  setStudentId(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              {error && (
                <p className="error">{error}</p>
              )}

              <button type="submit">
                Register
              </button>
            </form>
          </>
        ) : (
          <>
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) =>
                  setStudentId(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) =>
                  setLoginPassword(e.target.value)
                }
              />

              {error && (
                <p className="error">{error}</p>
              )}

              <button type="submit">
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;