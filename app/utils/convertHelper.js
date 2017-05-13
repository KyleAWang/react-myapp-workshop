
export function convertStringToNumber(sV = '') {
  if (isNaN(sV)) {
    return 0;
  }
  return Number(sV);
}
