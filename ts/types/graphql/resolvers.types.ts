import { GraphQLContext } from "./context.types";

import { Maybe } from "../utils.types";

import { Resolver, ResolversObject } from "./resolvers/utils.types";
import { ResolversParentTypes, ResolversTypes } from "./resolvers/wrappers.types";
import { AreaResolvers } from "./resolvers/area.types";
import {
  AllPlaceSnapshotsQueryArgs,
  CrowdReportQueryArgs,
  LoginMutationArgs,
  PlaceSnapshotQueryArgs,
  SignUpMutationArgs,
} from "./resolvers/args.types";
import { PlaceResolvers } from "./resolvers/place.types";

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  allAreas?: Resolver<Maybe<Array<Maybe<ResolversTypes["Area"]>>>, ParentType, ContextType>;
  allPlaceTypes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PlaceType"]>>>,
    ParentType,
    ContextType
  >;
  allServices?: Resolver<Maybe<Array<Maybe<ResolversTypes["Service"]>>>, ParentType, ContextType>;
  allIndicators?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Indicator"]>>>,
    ParentType,
    ContextType
  >;
  placeSnapshot?: Resolver<
    Maybe<ResolversTypes["PlaceSnapshot"]>,
    ParentType,
    ContextType,
    PlaceSnapshotQueryArgs
  >;
  allPlaceSnapshots?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PlaceSnapshot"]>>>,
    ParentType,
    ContextType,
    AllPlaceSnapshotsQueryArgs
  >;
  crowdReport?: Resolver<
    Maybe<ResolversTypes["CrowdReport"]>,
    ParentType,
    ContextType,
    CrowdReportQueryArgs
  >;
  allPlaces?: Resolver<Maybe<Array<Maybe<ResolversTypes["Place"]>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  login?: Resolver<
    Maybe<ResolversTypes["AuthenticationPayload"]>,
    ParentType,
    ContextType,
    LoginMutationArgs
  >;
  signUp?: Resolver<
    Maybe<ResolversTypes["AuthenticationPayload"]>,
    ParentType,
    ContextType,
    SignUpMutationArgs
  >;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  Area?: AreaResolvers<ContextType>;
  Place?: PlaceResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;
