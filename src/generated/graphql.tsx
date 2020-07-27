import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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

export type CategoryDtoInput = {
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
  data: CategoryDtoInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["UUID"];
};

export type MutationUpdateCategoryArgs = {
  id: Scalars["UUID"];
  data: CategoryDtoInput;
};

export type MutationCreateUserArgs = {
  user: UserDtoInput;
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

export type UserDtoInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  type: UserType;
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
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "LoginPayload" } & Pick<LoginPayload, "token">;
};

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

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
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
