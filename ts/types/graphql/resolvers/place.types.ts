import { GraphQLContext } from "../context.types";
import { Maybe } from "../../utils.types";
import { IsTypeOfResolverFn, Resolver, ResolversObject } from "./utils.types";
import { ResolversParentTypes, ResolversTypes } from "./wrappers.types";

export type PlaceResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Place"] = ResolversParentTypes["Place"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  place_name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  place_short_name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  place_address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  place_type?: Resolver<Maybe<ResolversTypes["PlaceType"]>, ParentType, ContextType>;
  coordinates?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Coordinate"]>>>,
    ParentType,
    ContextType
  >;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes["Service"]>>>, ParentType, ContextType>;
  indicators?: Resolver<Maybe<Array<Maybe<ResolversTypes["Indicator"]>>>, ParentType, ContextType>;
  current_crowds?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CurrentCrowd"]>>>,
    ParentType,
    ContextType
  >;
  current_queues?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CurrentQueue"]>>>,
    ParentType,
    ContextType
  >;
  place_working_days?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["PlaceWorkingDay"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
