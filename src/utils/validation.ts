function validateVin(value: string): string | null {
  if (value.trim().length === 0) return "Поле не може бути пустим! ";
  if (value.length > 17)
    return "Довжина VIN коду перевищує кількість дозволених символів: 17";
  return null;
}
export default validateVin;
