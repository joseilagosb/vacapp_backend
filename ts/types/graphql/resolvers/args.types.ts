export type PlaceSnapshotQueryArgs = Partial<{
  place_id: number;
  day: number;
  hour: number;
}>;

export type AllPlaceSnapshotsQueryArgs = Partial<Omit<PlaceSnapshotQueryArgs, "place_id">>;

export type LoginMutationArgs = Partial<{
  username: string;
  password: string;
}>;

export type SignUpMutationArgs = LoginMutationArgs;

export type CrowdReportQueryArgs = Partial<{ placeId: number }>;
