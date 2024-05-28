import { GraphQLContext } from "../context.types";
import { Maybe } from "../../utils.types";
import { IsTypeOfResolverFn, Resolver, ResolversObject } from "./utils.types";
import { ResolversParentTypes, ResolversTypes } from "./wrappers.types";

export type AreaResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Area"] = ResolversParentTypes["Area"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  area_name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  coordinates?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Coordinate"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
