export const createArrayFromInput = (input) => {
  return input.split(",").map((a) => parseInt(a));
};
