interface VinResults {
  Value: string;
  ValueId: string;
  Variable: string;
  VariableId: number;
}

export interface VinDecodeResponse {
  Count: number;
  Message?: string;
  SearchCriteria: string;
  Results: VinResults[];
}
