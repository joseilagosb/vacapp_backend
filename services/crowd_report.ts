import dayjs from "dayjs";

import { getDayType } from "../utils/time";

import {
  AverageCrowdsMap,
  CrowdRecord,
  CrowdReport,
  CrowdsMap,
  DividedCrowdsMap,
  TodayCrowdReport,
  WeekCrowdReport,
} from "../ts/types/services/crowd_report.types";

import { DayType } from "../ts/enums/utils.enums";
import CurrentCrowd from "../database/models/CurrentCrowd";

const getDividedCrowdsMap = (crowdsMap: CrowdsMap): DividedCrowdsMap => {
  const result = {
    weekday: {
      morning: {},
      afternoon: {},
      evening: {},
    },
    weekend: {
      morning: {},
      afternoon: {},
      evening: {},
    },
  } as DividedCrowdsMap;

  for (let crowdKey in crowdsMap) {
    for (let hourKey in crowdsMap[crowdKey]) {
      const crowdObj = crowdsMap[crowdKey][hourKey];
      if (+crowdKey > 0 && +crowdKey <= 5) {
        const weekdayObj = result["weekday"];
        if (+hourKey >= 6 && +hourKey < 12) {
          weekdayObj["morning"][crowdKey] = weekdayObj["morning"][crowdKey] || {};
          weekdayObj["morning"][crowdKey][hourKey] = crowdObj;
        } else if (+hourKey >= 12 && +hourKey < 18) {
          weekdayObj["afternoon"][crowdKey] = weekdayObj["afternoon"][crowdKey] || {};
          weekdayObj["afternoon"][crowdKey][hourKey] = crowdObj;
        } else if (+hourKey >= 18 && +hourKey < 24) {
          weekdayObj["evening"][crowdKey] = weekdayObj["evening"][crowdKey] || {};
          weekdayObj["evening"][crowdKey][hourKey] = crowdObj;
        }
      } else if (+crowdKey > 5 && +crowdKey <= 7) {
        const weekendObj = result["weekend"];
        if (+hourKey >= 6 && +hourKey < 12) {
          weekendObj["morning"][crowdKey] = weekendObj["morning"][crowdKey] || {};
          weekendObj["morning"][crowdKey][hourKey] = crowdObj;
        } else if (+hourKey >= 12 && +hourKey < 18) {
          weekendObj["afternoon"][crowdKey] = weekendObj["afternoon"][crowdKey] || {};
          weekendObj["afternoon"][crowdKey][hourKey] = crowdObj;
        } else if (+hourKey >= 18 && +hourKey < 24) {
          weekendObj["evening"][crowdKey] = weekendObj["evening"][crowdKey] || {};
          weekendObj["evening"][crowdKey][hourKey] = crowdObj;
        }
      }
    }
  }

  return result;
};

const getAverageCrowdsByHour = (crowdsMap: CrowdsMap): CrowdRecord => {
  const averageCrowds = {};
  const instancesByHour = {};
  for (let dayKey in crowdsMap) {
    for (let hourKey in crowdsMap[dayKey]) {
      if (!(hourKey in averageCrowds)) {
        averageCrowds[hourKey] = crowdsMap[dayKey][hourKey];
        instancesByHour[hourKey] = 1;
        continue;
      }
      averageCrowds[hourKey] += crowdsMap[dayKey][hourKey];
      instancesByHour[hourKey]++;
    }
  }

  for (let hourKey in instancesByHour) {
    averageCrowds[hourKey] = Math.round(averageCrowds[hourKey] / instancesByHour[hourKey]);
  }

  return averageCrowds;
};

const getAverageCrowdsMap = (dividedCrowdsMap: DividedCrowdsMap): AverageCrowdsMap => {
  const averageCrowdsMap = {
    weekday: { morning: {}, afternoon: {}, evening: {} },
    weekend: { morning: {}, afternoon: {}, evening: {} },
  } as AverageCrowdsMap;

  for (let dayTypeKey in dividedCrowdsMap) {
    for (let periodKey in dividedCrowdsMap[dayTypeKey]) {
      averageCrowdsMap[dayTypeKey][periodKey] = getAverageCrowdsByHour(
        dividedCrowdsMap[dayTypeKey][periodKey]
      );
    }
  }

  return averageCrowdsMap;
};

const getTodayCrowdReport = (dividedCrowdsMap: DividedCrowdsMap, day: number): TodayCrowdReport => {
  const dayType = getDayType(day);
  const crowdsMap = dividedCrowdsMap[dayType];

  const todayCrowdReport: TodayCrowdReport = {
    lowest_today_crowd: [],
    highest_today_crowd: [],
  };

  for (let periodKey in crowdsMap) {
    if (Object.keys(crowdsMap[periodKey]).length === 0) {
      todayCrowdReport["lowest_today_crowd"].push({
        time_period: periodKey,
        hour: -1,
        people_no: -1,
      });
      todayCrowdReport["highest_today_crowd"].push({
        time_period: periodKey,
        hour: -1,
        people_no: -1,
      });
      continue;
    }
    const todayCrowds = crowdsMap[periodKey][day];
    const hoursKeys = Object.keys(todayCrowds);
    const sortedHoursKeys = hoursKeys.sort((prev, curr) => todayCrowds[prev] - todayCrowds[curr]);

    todayCrowdReport["lowest_today_crowd"].push({
      time_period: periodKey,
      hour: +sortedHoursKeys[0],
      people_no: todayCrowds[sortedHoursKeys[0]],
    });
    todayCrowdReport["highest_today_crowd"].push({
      time_period: periodKey,
      hour: +sortedHoursKeys[sortedHoursKeys.length - 1],
      people_no: todayCrowds[sortedHoursKeys[sortedHoursKeys.length - 1]],
    });
  }

  return todayCrowdReport;
};

const getWeekCrowdReport = (averageCrowds: AverageCrowdsMap): Array<WeekCrowdReport> => {
  const weekCrowdReport = [
    {
      type: DayType.Weekday,
      highest_average_crowd: [],
      lowest_average_crowd: [],
      average_people_no: [],
    },
    {
      type: DayType.Weekend,
      highest_average_crowd: [],
      lowest_average_crowd: [],
      average_people_no: [],
    },
  ] as Array<WeekCrowdReport>;

  for (let dayTypeIdx = 0; dayTypeIdx < Object.keys(averageCrowds).length; dayTypeIdx++) {
    const dayTypeKey = weekCrowdReport[dayTypeIdx]["type"];
    for (let periodKey in averageCrowds[dayTypeKey]) {
      const currentCrowdObj = averageCrowds[dayTypeKey][periodKey];
      if (Object.keys(currentCrowdObj).length === 0) {
        weekCrowdReport[dayTypeIdx]["lowest_average_crowd"].push({
          time_period: periodKey,
          hour: -1,
          people_no: -1,
        });
        weekCrowdReport[dayTypeIdx]["highest_average_crowd"].push({
          time_period: periodKey,
          hour: -1,
          people_no: -1,
        });
        continue;
      }

      const hoursKeys = Object.keys(currentCrowdObj).map(Number);
      const sortedHoursKeys = hoursKeys.sort(
        (prev, curr) => currentCrowdObj[prev] - currentCrowdObj[curr]
      );

      weekCrowdReport[dayTypeIdx]["lowest_average_crowd"].push({
        time_period: periodKey,
        hour: sortedHoursKeys[0],
        people_no: currentCrowdObj[sortedHoursKeys[0]],
      });
      weekCrowdReport[dayTypeIdx]["highest_average_crowd"].push({
        time_period: periodKey,
        hour: sortedHoursKeys[sortedHoursKeys.length - 1],
        people_no: currentCrowdObj[sortedHoursKeys[sortedHoursKeys.length - 1]],
      });

      const crowdAverageInPeriod =
        Object.values(currentCrowdObj)
          .map(Number)
          .reduce((prev, curr) => prev + curr, 0) / Object.keys(currentCrowdObj).length;
      weekCrowdReport[dayTypeIdx]["average_people_no"].push({
        time_period: periodKey,
        people_no: Math.round(crowdAverageInPeriod),
      });
    }
  }

  return weekCrowdReport;
};

const getTomorrowPeopleNoAtSameTime = (crowdsMap, day: number, hour: number): number => {
  const tomorrow = day === 7 ? 1 : day + 1;

  if (!(tomorrow in crowdsMap)) {
    return -1;
  }

  if (!(hour in crowdsMap[tomorrow])) {
    return -1;
  }

  return crowdsMap[tomorrow][hour];
};

const getLeastCrowdedDaySameTime = (crowdsMap, hour: number): number | undefined => {
  let leastCrowdedDay = undefined;
  let lowestCrowdNumber = Infinity;
  for (let dayKey in crowdsMap) {
    if (!(hour in crowdsMap[dayKey])) {
      continue;
    }
    if (crowdsMap[dayKey][hour] < lowestCrowdNumber) {
      leastCrowdedDay = dayKey;
      lowestCrowdNumber = crowdsMap[dayKey][hour];
    }
  }
  if (!leastCrowdedDay) {
    return -1;
  }
  return leastCrowdedDay;
};

export const getCrowdReport = async (placeId: number): Promise<CrowdReport> => {
  const crowdsList = await CurrentCrowd.findAll({ where: { place_id: placeId }, raw: true });
  const crowdsMap: CrowdsMap = crowdsList.reduce((acc, crowd) => {
    acc[crowd["crowd_day_of_week"]] = acc[crowd["crowd_day_of_week"]] || {};
    acc[crowd["crowd_day_of_week"]][crowd["crowd_hour"]] = crowd["people_no"];
    return acc;
  }, {} as CrowdsMap);

  const dividedCrowdsMap = getDividedCrowdsMap(crowdsMap);

  const today = dayjs();
  const day = today.day() === 0 ? 7 : today.day();
  const hour = today.hour();

  const averageCrowds = getAverageCrowdsMap(dividedCrowdsMap);
  const todayCrowdReport = getTodayCrowdReport(dividedCrowdsMap, day);
  const weekCrowdReport = getWeekCrowdReport(averageCrowds);

  return {
    today_crowd_report: todayCrowdReport,
    week_crowd_report: weekCrowdReport,
    various: {
      tomorrow_people_no_at_same_time: getTomorrowPeopleNoAtSameTime(crowdsMap, day, hour),
      least_crowded_day_same_time: getLeastCrowdedDaySameTime(crowdsMap, hour),
    },
  };
};
