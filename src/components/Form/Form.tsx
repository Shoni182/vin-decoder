// import styles from "./Form.module.css";
import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
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
