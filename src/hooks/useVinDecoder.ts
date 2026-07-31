import { useMutation, useQuery } from "@tanstack/react-query";
import { decodeVin, getVehicleVariableList } from "../services/api";

export function useDecodeVin() {
  return useMutation({
    mutationFn: (vin: string) => decodeVin(vin),
  });
}

export function useVariablesList() {
  return useQuery({
    queryKey: ["vehicle-variables"],
    queryFn: getVehicleVariableList,
    staleTime: Infinity,
  });
}
