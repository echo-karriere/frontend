import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as React from "react";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  email: Scalars["String"];
  password: Scalars["String"];
  name: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
  staff: Scalars["Boolean"];
  admin: Scalars["Boolean"];
  active: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  me: User;
  user: User;
  users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  login: Scalars["Boolean"];
  changePassword: User;
  change: User;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationChangePasswordArgs = {
  id: Scalars["Int"];
  password: Scalars["String"];
  newPassword: Scalars["String"];
};

export type MutationChangeArgs = {
  id: Scalars["Int"];
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  staff?: Maybe<Scalars["Boolean"]>;
  admin?: Maybe<Scalars["Boolean"]>;
  active?: Maybe<Scalars["Boolean"]>;
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutationMutation = { __typename?: "Mutation" } & Pick<Mutation, "login">;

export const LoginMutationDocument = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
export type LoginMutationMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export type LoginMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<LoginMutationMutation, LoginMutationMutationVariables>,
  "mutation"
>;

export const LoginMutationComponent = (props: LoginMutationComponentProps) => (
  <ApolloReactComponents.Mutation<LoginMutationMutation, LoginMutationMutationVariables>
    mutation={LoginMutationDocument}
    {...props}
  />
);

export type LoginMutationProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;
} &
  TChildProps;
export function withLoginMutation<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LoginMutationMutation,
    LoginMutationMutationVariables,
    LoginMutationProps<TChildProps, TDataName>
  >(LoginMutationDocument, {
    alias: "loginMutation",
    ...operationOptions,
  });
}

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(
    LoginMutationDocument,
    baseOptions,
  );
}
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = ApolloReactCommon.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
