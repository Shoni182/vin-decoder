import { useVariablesList } from "../../hooks/useVinDecoder";
import { Link } from "react-router";
import { type VehicleVariable } from "../../types/vinServices";

import css from "./VariablesListPage.module.css";

function VariablesList() {
  const { data, isLoading, isError } = useVariablesList();

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Помилка Завантаження!</p>;

  return (
    <ul className={css.list}>
      {data.Results.map((v: VehicleVariable) => (
        <li key={v.ID}>
          {" "}
          <Link className={css.item} to={`/variables/${v.ID}`}>
            {v.Name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VariablesList;
