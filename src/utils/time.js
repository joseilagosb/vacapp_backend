export const getDayType = (day) => {
  if (day === 6 || day === 7) {
    return "weekend";
  }
  return "weekday";
};
