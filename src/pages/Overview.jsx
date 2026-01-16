import { useEffect, useState } from "react";

export default function Overview() {
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/status")
      .then((res) => res.json())
      .then((data) => {
        setStatus("Backend running");
        setError(false);
      })
      .catch(() => {
        setStatus("Failed to fetch backend");
        setError(true);
      });
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      {error ? (
        <p style={{ color: "red" }}>❌ {status}</p>
      ) : (
        <p style={{ color: "green" }}>✅ {status}</p>
      )}
    </div>
  );
}
