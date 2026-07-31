import { useVariablesList } from "../../hooks/useVinDecoder";
import { Link } from "react-router";
import { type VehicleVariable } from "../../types/vinServices";

// import styles from "./VariablesListPage.module.css";

function VariablesList() {
  const { data, isLoading, isError } = useVariablesList();

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Помилка Завантаження!</p>;

  return (
    <ul>
      {data.Results.map((v: VehicleVariable) => (
        <li key={v.ID}>
          {" "}
          <Link to={`/variables/${v.ID}`}>{v.Name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default VariablesList;
