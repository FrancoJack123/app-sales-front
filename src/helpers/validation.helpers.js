export const validateUniqueValue = async (value, existingValue, existsCheckFunction) => {
  if (!value || value === existingValue) {
    return true;
  }
  const exists = await existsCheckFunction(value);
  return !exists;
};
