import { useState } from "react";
import { useVinHistory } from "../../hooks/useVinHistory";
import css from "./HomePage.module.css";
import Form from "../../components/Form/Form";
//: Імпорт типів
import type { DecodeVinResult } from "../../types/vinServices";

//: Компонент голоівної сторінки
function HomePage() {
  const { history, addToHistory } = useVinHistory();
  const [results, setResults] = useState<DecodeVinResult[] | null>(null);

  function handleResult(vin: string, results: DecodeVinResult[]) {
    setResults(results);
    addToHistory(vin, results);
  }

  function handleHistoryClick(entry: (typeof history)[number]) {
    setResults(entry.results);
  }

  return (
    <div>
      <h1>Enter VIN code:</h1>

      <Form onResult={handleResult} />

      {history.length > 0 && (
        <div>
          <h3>List of last 3 VIN codes</h3>

          <ul className={css.history}>
            {history.map((entry) => (
              <li key={entry.timestamp}>
                <button
                  className={css.historyButton}
                  onClick={() => handleHistoryClick(entry)}
                >
                  {entry.vin}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {results && (
        <ul className={css.results}>
          {results
            .filter((r) => r.Value)
            .map((r) => (
              <li className={css.resultItem} key={r.VariableId}>
                {r.Variable}: {r.Value}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
