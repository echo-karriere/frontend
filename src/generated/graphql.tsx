import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A type reresentating a formatted java.time.Instant */
  Instant: any;
  /** A type representing a formatted java.util.UUID */
  UUID: any;
};

export type CategoryDataInput = {
  description: Scalars["String"];
  title: Scalars["String"];
};

export type CategoryEntity = {
  __typename?: "CategoryEntity";
  createdAt: Scalars["Instant"];
  description: Scalars["String"];
  id: Scalars["UUID"];
  modifiedAt?: Maybe<Scalars["Instant"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
};

export type CreateCategoryInput = {
  description: Scalars["String"];
  title: Scalars["String"];
};

export type CreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  type: UserType;
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginPayload = {
  __typename?: "LoginPayload";
  token: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory?: Maybe<CategoryEntity>;
  deleteCategory: Scalars["Boolean"];
  updateCategory?: Maybe<CategoryEntity>;
  createUser?: Maybe<UserEntity>;
  login: LoginPayload;
  refreshToken: LoginPayload;
};

export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["UUID"];
};

export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: "Query";
  categories: Array<CategoryEntity>;
  categoryById?: Maybe<CategoryEntity>;
  user?: Maybe<UserEntity>;
  users: Array<UserEntity>;
};

export type QueryCategoryByIdArgs = {
  id: Scalars["UUID"];
};

export type QueryUserArgs = {
  id: Scalars["UUID"];
};

export type UpdateCategoryInput = {
  category: CategoryDataInput;
  id: Scalars["UUID"];
};

export type UserEntity = {
  __typename?: "UserEntity";
  active: Scalars["Boolean"];
  createdAt: Scalars["Instant"];
  email: Scalars["String"];
  id: Scalars["UUID"];
  modifiedAt?: Maybe<Scalars["Instant"]>;
  name: Scalars["String"];
  password: Scalars["String"];
  type: UserType;
};

export enum UserType {
  Admin = "ADMIN",
  Staff = "STAFF",
  User = "USER",
}

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "LoginPayload" } & Pick<LoginPayload, "token">;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CategoryDataInput: CategoryDataInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  CategoryEntity: ResolverTypeWrapper<CategoryEntity>;
  CreateCategoryInput: CreateCategoryInput;
  CreateUserInput: CreateUserInput;
  Instant: ResolverTypeWrapper<Scalars["Instant"]>;
  LoginInput: LoginInput;
  LoginPayload: ResolverTypeWrapper<LoginPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Query: ResolverTypeWrapper<{}>;
  UUID: ResolverTypeWrapper<Scalars["UUID"]>;
  UpdateCategoryInput: UpdateCategoryInput;
  UserEntity: ResolverTypeWrapper<UserEntity>;
  UserType: UserType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CategoryDataInput: CategoryDataInput;
  String: Scalars["String"];
  CategoryEntity: CategoryEntity;
  CreateCategoryInput: CreateCategoryInput;
  CreateUserInput: CreateUserInput;
  Instant: Scalars["Instant"];
  LoginInput: LoginInput;
  LoginPayload: LoginPayload;
  Mutation: {};
  Boolean: Scalars["Boolean"];
  Query: {};
  UUID: Scalars["UUID"];
  UpdateCategoryInput: UpdateCategoryInput;
  UserEntity: UserEntity;
};

export type CategoryEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CategoryEntity"] = ResolversParentTypes["CategoryEntity"]
> = {
  createdAt?: Resolver<ResolversTypes["Instant"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["UUID"], ParentType, ContextType>;
  modifiedAt?: Resolver<Maybe<ResolversTypes["Instant"]>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface InstantScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Instant"], any> {
  name: "Instant";
}

export type LoginPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LoginPayload"] = ResolversParentTypes["LoginPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createCategory?: Resolver<
    Maybe<ResolversTypes["CategoryEntity"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, "input">
  >;
  deleteCategory?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoryArgs, "id">
  >;
  updateCategory?: Resolver<
    Maybe<ResolversTypes["CategoryEntity"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryArgs, "input">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["UserEntity"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  login?: Resolver<ResolversTypes["LoginPayload"], ParentType, ContextType, RequireFields<MutationLoginArgs, "input">>;
  refreshToken?: Resolver<ResolversTypes["LoginPayload"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  categories?: Resolver<Array<ResolversTypes["CategoryEntity"]>, ParentType, ContextType>;
  categoryById?: Resolver<
    Maybe<ResolversTypes["CategoryEntity"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryByIdArgs, "id">
  >;
  user?: Resolver<Maybe<ResolversTypes["UserEntity"]>, ParentType, ContextType, RequireFields<QueryUserArgs, "id">>;
  users?: Resolver<Array<ResolversTypes["UserEntity"]>, ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["UUID"], any> {
  name: "UUID";
}

export type UserEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserEntity"] = ResolversParentTypes["UserEntity"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Instant"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["UUID"], ParentType, ContextType>;
  modifiedAt?: Resolver<Maybe<ResolversTypes["Instant"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["UserType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  CategoryEntity?: CategoryEntityResolvers<ContextType>;
  Instant?: GraphQLScalarType;
  LoginPayload?: LoginPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UserEntity?: UserEntityResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
