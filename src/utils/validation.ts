function validateVin(value: string): string | null {
  if (value.trim().length === 0) return "Поле не може бути пустим!";
  if (value.length > 17)
    return "Довжина VIN коду перевищує кількість дозволених символів: 17";
  if (!hasNoForbiddenCharacters(value))
    return "VIN містить заборонені символи (I,O,Q або спецсимволи";
  return null;
}
export default validateVin;

function hasNoForbiddenCharacters(value: string): boolean {
  const allowedPattern = /^[A-HJ-NPR-Z0-9]*$/i;
  return allowedPattern.test(value);
}
