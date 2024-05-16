import { Area } from "../typedefs.types";
import { Exact, Maybe } from "../utils.types";

export type AllAreasQueryVariables = Exact<{ [key: string]: never }>;

export type AllAreasDataQuery = {
  __typename?: "Query";
  allAreas?: Maybe<Array<Area>>;
};
