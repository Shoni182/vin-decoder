// import styles from "./Form.module.css";
import { useState } from "react";

interface eventProps {}

function Form() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function handleChange(event) {
    setValue(event.tarvet.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //! виклик API
    //! валідація ф.я
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />

      {error && <span>{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
