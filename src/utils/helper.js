export const createArrayFromInput = (input) => {
  return input.split(",").map((a) => parseInt(a));
};

export const getCellItemClass = (meta, index) => {
  if (meta.mid === index) return "bg-success";
  else if (meta.upperBound === index) return "bg-warning";
  else if (meta.lowerBound === index) return "bg-danger";

  return "";
};
