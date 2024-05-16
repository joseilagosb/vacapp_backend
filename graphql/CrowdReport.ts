import { createModule, gql } from "graphql-modules";
import { getCrowdReport } from "../services/crowd_report";

const typeDefs = [
  gql`
    extend type Query {
      crowdReport(placeId: Int): CrowdReport
    }

    type CrowdReport {
      today_crowd_report: TodayCrowdReport
      week_crowd_report: [WeekCrowdReport]
      various: VariousCrowdReport
    }

    type TodayCrowdReport {
      lowest_today_crowd: [HourCrowd]
      highest_today_crowd: [HourCrowd]
    }

    type WeekCrowdReport {
      type: String
      highest_average_crowd: [HourCrowd]
      lowest_average_crowd: [HourCrowd]
      average_people_no: [AverageCrowd]
    }

    type AverageCrowd {
      time_period: String
      people_no: Int
    }

    type HourCrowd {
      time_period: String
      hour: Int
      people_no: Int
    }

    type VariousCrowdReport {
      tomorrow_people_no_at_same_time: Int
      least_crowded_day_same_time: Int
    }
  `,
];

const resolvers = {
  Query: {
    crowdReport: async (obj, args, context, info) => getCrowdReport(args.placeId),
  },
};

export const crowdReport = createModule({
  id: "crowdReport",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});
