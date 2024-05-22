const SqlString = require("sequelize/lib/sql-string");

export const getIndicatorAverageScore = (indicators) => {
  let indicatorsString = SqlString.escape(indicators.join(","));
  indicatorsString = indicatorsString.substring(1, indicatorsString.length - 1);
  return `SELECT
	          ROUND(AVG(CAST(indicator_value AS numeric)), 1)
          FROM
	          place_indicator
          WHERE
	          place_indicator.place_id = current_crowds.place_id
	          AND place_indicator.indicator_id IN (${indicatorsString})`;
};
