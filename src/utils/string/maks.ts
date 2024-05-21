export const maskCellPhone = (value: string): string => {
  let newValue = value;
  if (newValue) {
    newValue = newValue.replace(/\D/g, '');
    newValue = newValue.replace(/^(\d{2})(\d)/g, '($1) $2');
    newValue = newValue.replace(/(\d)(\d{4})$/, '$1-$2');
    return newValue;
  }
  return '';
};

/**
 * Return string with format nnnnn-nnn
 * @argument string
 * @returns string
 *
 */
export const maskCep = (value: string): string => {
  let newValue = value;
  if (newValue) {
    newValue = newValue.replace(/\D/g, '');
    newValue = newValue.replace(/(\d{5})(\d{3})/g, '$1-$2');
    return newValue;
  }
  return '';
};
