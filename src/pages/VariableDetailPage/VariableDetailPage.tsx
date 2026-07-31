// import styles from "./VariableDetailPage.module.css";

import { useParams } from "react-router";
import { useVariablesList } from "../../hooks/useVinDecoder";
import type { VehicleVariable } from "../../types/vinServices";

function VariableDetail() {
  const { variableId } = useParams();

  const { data, isLoading, isError } = useVariablesList();
  const variable = data?.Results.find(
    (v: VehicleVariable) => String(v.ID) === variableId,
  );

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Не вдалося завантажити список змінних</p>;
  if (!variable) return <p>Змінну з ID {variableId} не знайдено</p>;

  return (
    <div>
      <h1>{variable.Name}</h1>
      <p>{variable.Description}</p>
    </div>
  );
}

export default VariableDetail;
