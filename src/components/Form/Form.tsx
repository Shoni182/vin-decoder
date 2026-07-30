// import styles from "./Form.module.css";
import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import validateVin from "../../utils/validation";
import Modal from "../Modal/Modal";

function Form() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateVin(value);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    //! виклик API
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />

      {/* {error && <span>{error}</span>} */}
      {error && <Modal close={() => setError(null)}>{error}</Modal>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
