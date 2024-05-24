import sequelize, { FindAttributeOptions } from "sequelize";
import { getIndicatorAverageScore } from "../raw/indicator_average_score";

export const getPlaceSnapshotAttributes = (): FindAttributeOptions => {
  const covidSafetyScore = getIndicatorAverageScore([1, 2, 3]);
  const serviceQualityScore = getIndicatorAverageScore([4, 6]);
  return [
    ["id", "place_id"],
    [sequelize.col("current_crowds.crowd_day_of_week"), "day_of_week"],
    [sequelize.col("current_crowds.crowd_hour"), "hour_of_day"],
    [sequelize.col("current_crowds.people_no"), "crowd_people_no"],
    [sequelize.col("current_queues.people_no"), "queue_people_no"],
    [sequelize.literal(`(${covidSafetyScore})`), "covid_safety_score"],
    [sequelize.literal(`(${serviceQualityScore})`), "service_quality_score"],
  ];
};
