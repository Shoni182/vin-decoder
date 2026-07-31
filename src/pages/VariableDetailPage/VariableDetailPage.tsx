import css from "./VariableDetailPage.module.css";

import { useParams } from "react-router";
import { useVariablesList } from "../../hooks/useVinDecoder";
import type { VehicleVariable } from "../../types/vinServices";

function stripHtml(value: string): string {
  return (
    new DOMParser().parseFromString(value, "text/html").body.textContent ?? ""
  );
}

function VariableDetail() {
  const { variableId } = useParams();
  // console.log(typeof variableId);
  const numericId = Number(variableId);

  const { data, isLoading, isError } = useVariablesList();

  const variable = data?.Results.find(
    (v: VehicleVariable) => v.ID === numericId,
  );

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Не вдалося завантажити список змінних</p>;
  if (!variable) return <p>Змінну з ID {variableId} не знайдено</p>;

  return (
    <div>
      <h3>{variable.Name}</h3>
      <p className={css.detail}>{stripHtml(variable.Description)}</p>
    </div>
  );
}

export default VariableDetail;
