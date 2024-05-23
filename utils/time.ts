import { DayType } from "../ts/enums/utils.enums";

export const getDayType = (day: number): DayType => {
  if (day === 6 || day === 7) {
    return DayType.Weekend;
  }
  return DayType.Weekday;
};
