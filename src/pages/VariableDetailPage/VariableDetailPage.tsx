import styles from "./VariableDetailPage.module.css";

import { useParams } from "react-router";

function VariableDetail() {
  const { variableId } = useParams();

  return (
    <div>
      <h1>Variable Detail</h1>
      Деталі змінної з ID: {variableId}
    </div>
  );
}

export default VariableDetail;
