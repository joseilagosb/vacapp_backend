import dayjs from "dayjs";
import model from "../models";
import { getDayType, isWeekday } from "./time";
const { CurrentCrowd } = model;

const divideCrowds = (crowdsMap) => {
  var result = {
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
  };

  for (let crowdKey in crowdsMap) {
    for (let hourKey in crowdsMap[crowdKey]) {
      const crowdObj = crowdsMap[crowdKey][hourKey];
      if (crowdKey > 0 && crowdKey <= 5) {
        const weekdayObj = result["weekday"];
        if (hourKey >= 6 && hourKey < 12) {
          weekdayObj["morning"][crowdKey] = weekdayObj["morning"][crowdKey] || {};
          weekdayObj["morning"][crowdKey][hourKey] = crowdObj;
        } else if (hourKey >= 12 && hourKey < 18) {
          weekdayObj["afternoon"][crowdKey] = weekdayObj["afternoon"][crowdKey] || {};
          weekdayObj["afternoon"][crowdKey][hourKey] = crowdObj;
        } else if (hourKey >= 18 && hourKey < 24) {
          weekdayObj["evening"][crowdKey] = weekdayObj["evening"][crowdKey] || {};
          weekdayObj["evening"][crowdKey][hourKey] = crowdObj;
        }
      } else if (crowdKey > 5 && crowdKey <= 7) {
        const weekendObj = result["weekend"];
        if (hourKey >= 6 && hourKey < 12) {
          weekendObj["morning"][crowdKey] = weekendObj["morning"][crowdKey] || {};
          weekendObj["morning"][crowdKey][hourKey] = crowdObj;
        } else if (hourKey >= 12 && hourKey < 18) {
          weekendObj["afternoon"][crowdKey] = weekendObj["afternoon"][crowdKey] || {};
          weekendObj["afternoon"][crowdKey][hourKey] = crowdObj;
        } else if (hourKey >= 18 && hourKey < 24) {
          weekendObj["evening"][crowdKey] = weekendObj["evening"][crowdKey] || {};
          weekendObj["evening"][crowdKey][hourKey] = crowdObj;
        }
      }
    }
  }

  return result;
};

const getAverageCrowdsFromPeriod = (crowdsMap) => {
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
    averageCrowds[hourKey] = Math.round((averageCrowds[hourKey] = instancesByHour[hourKey]));
  }

  return averageCrowds;
};

const getAverageCrowds = (dividedCrowds) => {
  const averageCrowds = {
    weekday: { morning: {}, afternoon: {}, evening: {} },
    weekend: { morning: {}, afternoon: {}, evening: {} },
  };

  for (let dayTypeKey in dividedCrowds) {
    for (let periodKey in dividedCrowds[dayTypeKey]) {
      averageCrowds[dayTypeKey][periodKey] = getAverageCrowdsFromPeriod(dividedCrowds[dayTypeKey][periodKey]);
    }
  }

  return averageCrowds;
};

const getTodayCrowdReport = (dividedCrowds, day, hour) => {
  const dayType = getDayType(day);
  const crowdsObj = dividedCrowds[dayType];

  const todayCrowdReport = {
    lowest_today_crowd: [],
    highest_today_crowd: [],
  };

  for (let periodKey in crowdsObj) {
    if (Object.keys(crowdsObj[periodKey]).length === 0) {
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
    const todayCrowds = crowdsObj[periodKey][day];
    const hoursKeys = Object.keys(todayCrowds);
    const sortedHoursKeys = hoursKeys.sort((prev, curr) => todayCrowds[prev] - todayCrowds[curr]);

    todayCrowdReport["lowest_today_crowd"].push({
      time_period: periodKey,
      hour: sortedHoursKeys[0],
      people_no: todayCrowds[sortedHoursKeys[0]],
    });
    todayCrowdReport["highest_today_crowd"].push({
      time_period: periodKey,
      hour: sortedHoursKeys[sortedHoursKeys.length - 1],
      people_no: todayCrowds[sortedHoursKeys[sortedHoursKeys.length - 1]],
    });
  }

  return todayCrowdReport;
};

const getWeekCrowdReport = (averageCrowds) => {
  const weekCrowdReport = [
    { type: "weekday", highest_average_crowd: [], lowest_average_crowd: [], average_people_no: [] },
    { type: "weekend", highest_average_crowd: [], lowest_average_crowd: [], average_people_no: [] },
  ];

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

      const hoursKeys = Object.keys(averageCrowds[dayTypeKey][periodKey]);
      const sortedHoursKeys = hoursKeys.sort((prev, curr) => averageCrowds[prev] - averageCrowds[curr]);

      weekCrowdReport[dayTypeIdx]["lowest_average_crowd"].push({
        time_period: periodKey,
        hour: sortedHoursKeys[0],
        people_no: averageCrowds[dayTypeKey][periodKey][sortedHoursKeys[0]],
      });
      weekCrowdReport[dayTypeIdx]["highest_average_crowd"].push({
        time_period: periodKey,
        hour: sortedHoursKeys[sortedHoursKeys.length - 1],
        people_no: averageCrowds[dayTypeKey][periodKey][sortedHoursKeys[sortedHoursKeys.length - 1]],
      });
    }
  }

  return weekCrowdReport;
};

const getTomorrowPeopleNoAtSameTime = (crowdsMap, day, hour) => {
  const tomorrow = day === 7 ? 1 : day + 1;

  if (!(tomorrow in crowdsMap)) {
    return -1;
  }

  if (!(hour in crowdsMap[tomorrow])) {
    return -1;
  }

  return crowdsMap[tomorrow][hour];
};

const getLeastCrowdedDaySameTime = (crowdsMap, hour) => {
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

export const getCrowdReport = async (place_id) => {
  const crowdsList = await CurrentCrowd.findAll({
    attributes: ["place_id", "crowd_day_of_week", "crowd_hour", "people_no"],
    where: {
      place_id: place_id,
    },
    raw: true,
  });

  const crowdsMap = crowdsList.reduce((acc, crowd) => {
    acc[crowd["crowd_day_of_week"]] = acc[crowd["crowd_day_of_week"]] || {};
    acc[crowd["crowd_day_of_week"]][crowd["crowd_hour"]] = crowd["people_no"];
    return acc;
  }, {});

  const dividedCrowds = divideCrowds(crowdsMap);

  const today = dayjs();
  const day = today.day() === 0 ? 7 : today.day();
  const hour = today.hour();

  const averageCrowds = getAverageCrowds(dividedCrowds);
  const todayCrowdReport = getTodayCrowdReport(dividedCrowds, day, hour);
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
