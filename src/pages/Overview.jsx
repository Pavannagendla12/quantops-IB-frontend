import { useEffect, useState } from "react";

export default function Overview() {
  const [backendRunning, setBackendRunning] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then(() => {
        setBackendRunning(true);
      })
      .catch(() => {
        setBackendRunning(false);
      });
  }, [API_URL]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Overview</h1>

      {backendRunning === null && (
        <p>Checking backend status...</p>
      )}

      {backendRunning === true && (
        <p style={{ color: "limegreen", fontWeight: "bold" }}>
          ✔ Backend running
        </p>
      )}

      {backendRunning === false && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ✖ Failed to fetch backend
        </p>
      )}
    </div>
  );
}
