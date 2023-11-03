export const lineIsValid = (fields: any) => {
  let isValid = true;
  for (let index = 0; index < fields.length; index++) {
      if (!fields[index]) {
          isValid = false;
      }
  }
  return isValid;
}