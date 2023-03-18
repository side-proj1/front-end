function getFieldError(value: string | undefined) {
  if (!value) return "field is required";

  const valueIsLowerCase = value === value.toLowerCase();
  const valueIsLongEnough = value.length >= 3;
  const valueIsShortEnough = value.length <= 20;

  if (!valueIsLowerCase) {
    return "value must be lower case";
  } else if (!valueIsLongEnough) {
    return "value must be at least 3 characters long";
  } else if (!valueIsShortEnough) {
    return "value must be no longer than 20 characters";
  }
  return null;
}

export default getFieldError;
