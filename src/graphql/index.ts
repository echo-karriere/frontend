import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** Information used to check application state */
export type BuildInfo = {
  __typename?: "BuildInfo";
  /** Date and time when app was built */
  buildDate: Scalars["DateTime"];
  /** Commit hash for the app */
  commit: Scalars["String"];
};

/** A category is used to group pages into logical hierachies, for example by grouping all news related pages under the category 'News'. */
export type Category = {
  __typename?: "Category";
  /** When was this resource created? */
  createdAt: Scalars["DateTime"];
  /** What is this category used for? */
  description?: Maybe<Scalars["String"]>;
  /** Category ID */
  id: Scalars["ID"];
  /** When was this resource last updated? */
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  /** What is the slug for the URL? For news it could be '/news/' while for the category 'For bedrifter' it could be '/for-bedrifter/'. */
  slug: Scalars["String"];
  /** Name of category */
  title: Scalars["String"];
};

/** A company that is or has participated in one of our events. */
export type Company = {
  __typename?: "Company";
  /** When was this resource created? */
  createdAt: Scalars["DateTime"];
  /** A link to their homepage */
  homepage: Scalars["String"];
  /** Company ID */
  id: Scalars["ID"];
  /** When was this resource last updated? */
  modifiedAt?: Maybe<Scalars["DateTime"]>;
  /** Name of company */
  name: Scalars["String"];
};

export type CreateCategoryInput = {
  description?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
};

export type CreateCompanyInput = {
  homepage: Scalars["String"];
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory?: Maybe<Category>;
  createCompany?: Maybe<Company>;
  deleteCategory: Scalars["Boolean"];
  deleteCompany: Scalars["Boolean"];
  updateCategory?: Maybe<Category>;
  updateCompany?: Maybe<Company>;
  updateUsersFromMsal: Scalars["Boolean"];
};

export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["String"];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars["String"];
};

export type MutationUpdateCategoryArgs = {
  id: Scalars["String"];
  input: UpdateCategoryInput;
};

export type MutationUpdateCompanyArgs = {
  id: Scalars["String"];
  input: UpdateCompanyInput;
};

export type Query = {
  __typename?: "Query";
  allCategories: Array<Category>;
  allCompanies: Array<Company>;
  buildInfo: BuildInfo;
  categoryById?: Maybe<Category>;
  companyById?: Maybe<Company>;
  me?: Maybe<User>;
};

export type QueryCategoryByIdArgs = {
  id: Scalars["String"];
};

export type QueryCompanyByIdArgs = {
  id: Scalars["String"];
};

export type UpdateCategoryInput = {
  description?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
};

export type UpdateCompanyInput = {
  homepage: Scalars["String"];
  name: Scalars["String"];
};

/** A subset of a user */
export type User = {
  __typename?: "User";
  /** User ID */
  id: Scalars["ID"];
  /** Users roles */
  roles: Array<Scalars["String"]>;
};

export type AllCompaniesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCompaniesQuery = { __typename?: "Query" } & {
  allCompanies: Array<{ __typename?: "Company" } & Pick<Company, "id" | "name" | "homepage">>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & { me?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "roles">> };

export const AllCompaniesDocument = gql`
  query AllCompanies {
    allCompanies {
      id
      name
      homepage
    }
  }
`;

/**
 * __useAllCompaniesQuery__
 *
 * To run a query within a React component, call `useAllCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCompaniesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, options);
}
export function useAllCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, options);
}
export type AllCompaniesQueryHookResult = ReturnType<typeof useAllCompaniesQuery>;
export type AllCompaniesLazyQueryHookResult = ReturnType<typeof useAllCompaniesLazyQuery>;
export type AllCompaniesQueryResult = Apollo.QueryResult<AllCompaniesQuery, AllCompaniesQueryVariables>;
export const MeDocument = gql`
  query Me {
    me {
      id
      roles
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;