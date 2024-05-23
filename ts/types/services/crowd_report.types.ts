import { DayPeriod, DayType } from "../../enums/utils.enums";
import { DaysOfWeek } from "../constants.types";

export type CrowdRecord = Record<string, number>;
export type CrowdsMap = Record<DaysOfWeek, CrowdRecord>;

export type AverageCrowdsMap = Record<DayType, Record<DayPeriod, CrowdRecord>>;
export type DividedCrowdsMap = Record<DayType, Record<DayPeriod, CrowdsMap>>;

export type CrowdReport = {
  today_crowd_report: TodayCrowdReport;
  week_crowd_report: Array<WeekCrowdReport>;
  various: VariousCrowdReport;
};

export type TodayCrowdReport = {
  lowest_today_crowd: Array<HourCrowd>;
  highest_today_crowd: Array<HourCrowd>;
};

export type WeekCrowdReport = {
  type: DayType;
  highest_average_crowd: Array<HourCrowd>;
  lowest_average_crowd: Array<HourCrowd>;
  average_people_no: Array<AverageCrowd>;
};

export type AverageCrowd = {
  time_period: string;
  people_no: number;
};

export type HourCrowd = {
  time_period: string;
  hour: number;
  people_no: number;
};

export type VariousCrowdReport = {
  tomorrow_people_no_at_same_time: number;
  least_crowded_day_same_time: number;
};
