// import styles from "./HomePage.module.css";
import { useState } from "react";
import Form from "../../components/Form/Form";
import { useVinHistory } from "../../hooks/useVinHistory";
import type { DecodeVinResult } from "../../types/vinServices";

function HomePage() {
  const { history, addToHistory } = useVinHistory();
  const [results, setResults] = useState<DecodeVinResult[] | null>(null);

  function handleResult(vin: string, results: DecodeVinResult[]) {
    setResults(results);
    addToHistory(vin, results);
  }

  function handleHistoryClick(entry: (typeof history)[number]) {
    setResults(entry.results); // без повторного запиту
  }

  return (
    <div>
      <h1>Home Page</h1>

      {history.length > 0 && (
        <ul>
          {history.map((entry) => (
            <li key={entry.timestamp}>
              <button onClick={() => handleHistoryClick(entry)}>
                {entry.vin}
              </button>
            </li>
          ))}
        </ul>
      )}

      <Form onResult={handleResult} />

      {results && (
        <ul>
          {results
            .filter((r) => r.Value)
            .map((r) => (
              <li key={r.VariableId}>
                {r.Variable}: {r.Value}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
