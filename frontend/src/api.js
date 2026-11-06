export async function getHealth() {
  const response = await fetch("/api/health");

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
