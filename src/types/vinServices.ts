export interface DecodeVinResult {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
}

export interface VinDecodeResponse {
  Count: number;
  Message?: string;
  SearchCriteria: string;
  Results: DecodeVinResult[];
}

export interface VehicleVariable {
  ID: number;
  Name: string;
  Description: string;
}

export interface VariableListResponse {
  Count: number;
  Message?: string;
  Results: VehicleVariable[];
}

//? Variable і Value з масиву Results у якиї Value заповнено
//? / variables Список усіх можливих змінних з описами
//? /variables/{variableId} опис конкретної змінної
