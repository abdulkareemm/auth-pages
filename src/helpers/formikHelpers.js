export const filterFormikErrors = (
  errors,
  touched,
  values
) => {
  const touchedKeys = Object.entries(touched).map(([key, value]) => {
    if (value) return key;
  });
  const finalErrors = [];

  Object.entries(errors).forEach(([key, value]) => {
    if (touchedKeys.includes(key) && values) finalErrors.push(value);
  });

  return finalErrors;
};