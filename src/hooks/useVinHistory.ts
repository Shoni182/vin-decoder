import { useState } from "react";
import type { DecodeVinResult } from "../types/vinServices";

const STORAGE_KEY = "vin-decoder-history";
const MAX_ITEMS = 3;

interface HistoryEntry {
  vin: string;
  results: DecodeVinResult[];
  timestamp: number;
}

function readHistory(): HistoryEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useVinHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>(readHistory);

  function addToHistory(vin: string, results: DecodeVinResult[]) {
    const next = [{ vin, results, timestamp: Date.now() }, ...history].slice(
      0,
      MAX_ITEMS,
    );
    setHistory(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return { history, addToHistory };
}
