import { useEffect, useState } from "react";
import { getHealth } from "./api.js";

export default function App() {
  const [status, setStatus] = useState("Checking the backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getHealth()
      .then((health) => {
        if (active) setStatus(health.message);
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
          setStatus("");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">FULL-STACK STARTER</p>
        <h1>Your next project starts here.</h1>
        <p className="intro">
          React and Vite power the front end. Express provides the API.
        </p>
        <div className={`connection ${error ? "connection-error" : ""}`}>
          <span className="indicator" aria-hidden="true" />
          <span>
            {error ? `Backend connection failed: ${error}` : status}
          </span>
        </div>
        <p className="hint">
          Edit <code>frontend/src/App.jsx</code> to start building.
        </p>
      </section>
    </main>
  );
}
