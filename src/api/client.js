const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function getHealth() {
  const res = await fetch(`${API_BASE}/`);
  if (!res.ok) throw new Error("API not reachable");
  return res.json();
}
