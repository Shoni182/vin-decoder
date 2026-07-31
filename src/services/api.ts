import type { VinDecodeResponse } from "../types/vinServices";

const BASE_URL = "https://vpic.nhtsa.dot.gov/api";

// Запит для декодування VIN номеру
export async function decodeVin(vin: string): Promise<VinDecodeResponse> {
  const res = await fetch(`${BASE_URL}/vehicles/decodevin/${vin}?format=json`);
  return res.json();
}

export async function getVehicleVariableList() {
  const res = await fetch(
    `${BASE_URL}/vehicles/getvehiclevariablelist?format=json`,
  );

  return res.json();
}
