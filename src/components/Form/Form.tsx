import css from "./Form.module.css";
import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import validateVin from "../../utils/validation";
import Modal from "../Modal/Modal";
import { useDecodeVin } from "../../hooks/useVinDecoder";
import { type DecodeVinResult } from "../../types/vinServices";
interface FormProps {
  onResult: (vin: string, results: DecodeVinResult[]) => void;
}

function Form({ onResult }: FormProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const { mutate, isPending } = useDecodeVin();

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateVin(value);

    if (isPending) return <p>Завантаження...</p>;

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    mutate(value, {
      onSuccess: (data) => {
        if (data.Message && !data.Results?.length) {
          setError(data.Message);
          return;
        }
        onResult(value, data.Results);
      },
      onError: () => setError("Не вдалося виконати запит"),
    });
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} value={value} onChange={handleChange} />
      {error && <Modal close={() => setError(null)}>{error}</Modal>}
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
