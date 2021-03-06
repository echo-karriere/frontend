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
  jobs: Array<Job>;
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

export type CreateJobInput = {
  company: Scalars["String"];
  deadline?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  finalExpiration?: Maybe<Scalars["DateTime"]>;
  location: Scalars["String"];
  published: Scalars["Boolean"];
  title: Scalars["String"];
  type: JobType;
  url: Scalars["String"];
};

export type CreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  roles: Array<Scalars["ID"]>;
};

/** A job */
export type Job = {
  __typename?: "Job";
  /** Company for job listing */
  company: Company;
  /** When is the deadline for applying? */
  deadline?: Maybe<Scalars["DateTime"]>;
  /** Description of job */
  description: Scalars["String"];
  /** When should the job be unlisted? */
  finalExpiration?: Maybe<Scalars["DateTime"]>;
  /** Job ID */
  id: Scalars["ID"];
  /** Where is the job? */
  location: Scalars["String"];
  /** Whether the job posting is published */
  published: Scalars["Boolean"];
  /** Title of job */
  title: Scalars["String"];
  /** What kind of job it is */
  type: JobType;
  /** External URL for job */
  url: Scalars["String"];
};

/** What type of job is it? */
export enum JobType {
  Full = "Full",
  Other = "Other",
  Part = "Part",
  Summer = "Summer",
}

export type Mutation = {
  __typename?: "Mutation";
  /** Assign roles from Azure to all users in our system */
  addRolesToUsers: Scalars["Boolean"];
  createCategory?: Maybe<Category>;
  createCompany?: Maybe<Company>;
  createJob: Job;
  createUser?: Maybe<User>;
  deleteCategory: Scalars["Boolean"];
  deleteCompany: Scalars["Boolean"];
  deleteJob: Scalars["Boolean"];
  deleteUser: Scalars["Boolean"];
  updateCategory?: Maybe<Category>;
  updateCompany?: Maybe<Company>;
  updateJob?: Maybe<Job>;
  /** Fetch and create or update roles from Azure in our system */
  updateRolesFromAzure: Scalars["Boolean"];
  updateUser?: Maybe<User>;
  /** Fetch and create or update users from Azure in our system */
  updateUsersFromAzure: Scalars["Boolean"];
};

export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};

export type MutationCreateJobArgs = {
  input: CreateJobInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["String"];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars["String"];
};

export type MutationDeleteJobArgs = {
  id: Scalars["String"];
};

export type MutationDeleteUserArgs = {
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

export type MutationUpdateJobArgs = {
  id: Scalars["String"];
  input: UpdateJobInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  buildInfo: BuildInfo;
  categories: Array<Category>;
  category?: Maybe<Category>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  job?: Maybe<Job>;
  jobs: Array<Job>;
  me?: Maybe<User>;
  role: Role;
  roles: Array<Role>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryCategoryArgs = {
  id: Scalars["String"];
};

export type QueryCompanyArgs = {
  id: Scalars["String"];
};

export type QueryJobArgs = {
  id: Scalars["String"];
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

/** A role assigned to users */
export type Role = {
  __typename?: "Role";
  /** Role description */
  description: Scalars["String"];
  /** The role ID */
  id: Scalars["ID"];
  /** Name of the role */
  name: Scalars["String"];
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

export type UpdateJobInput = {
  company: Scalars["String"];
  deadline?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  finalExpiration?: Maybe<Scalars["DateTime"]>;
  location: Scalars["String"];
  published: Scalars["Boolean"];
  title: Scalars["String"];
  type: JobType;
  url: Scalars["String"];
};

export type UpdateUserInput = {
  email?: Maybe<Scalars["String"]>;
  enabled?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Scalars["ID"]>>;
};

/** A subset of a user */
export type User = {
  __typename?: "User";
  /** User email */
  email: Scalars["String"];
  /** Is the account active? */
  enabled: Scalars["Boolean"];
  /** User ID */
  id: Scalars["ID"];
  /** Name of the user */
  name: Scalars["String"];
  /** Users roles */
  roles: Array<Role>;
};

export type AllCompaniesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCompaniesQuery = { __typename?: "Query" } & {
  companies: Array<{ __typename?: "Company" } & Pick<Company, "id" | "name" | "homepage">>;
};

export type AllJobsQueryVariables = Exact<{ [key: string]: never }>;

export type AllJobsQuery = { __typename?: "Query" } & {
  jobs: Array<
    { __typename?: "Job" } & Pick<Job, "id" | "title" | "published" | "type" | "deadline"> & {
        company: { __typename?: "Company" } & Pick<Company, "name">;
      }
  >;
};

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;

export type CreateCompanyMutation = { __typename?: "Mutation" } & {
  createCompany?: Maybe<{ __typename?: "Company" } & Pick<Company, "id">>;
};

export type CreateJobMutationVariables = Exact<{
  input: CreateJobInput;
}>;

export type CreateJobMutation = { __typename?: "Mutation" } & {
  createJob: { __typename?: "Job" } & Pick<Job, "id" | "title">;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<
    { __typename?: "User" } & Pick<User, "id"> & { roles: Array<{ __typename?: "Role" } & Pick<Role, "name">> }
  >;
};

export const AllCompaniesDocument = gql`
  query AllCompanies {
    companies {
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
export const AllJobsDocument = gql`
  query AllJobs {
    jobs {
      id
      title
      company {
        name
      }
      published
      type
      deadline
    }
  }
`;

/**
 * __useAllJobsQuery__
 *
 * To run a query within a React component, call `useAllJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllJobsQuery(baseOptions?: Apollo.QueryHookOptions<AllJobsQuery, AllJobsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllJobsQuery, AllJobsQueryVariables>(AllJobsDocument, options);
}
export function useAllJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllJobsQuery, AllJobsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllJobsQuery, AllJobsQueryVariables>(AllJobsDocument, options);
}
export type AllJobsQueryHookResult = ReturnType<typeof useAllJobsQuery>;
export type AllJobsLazyQueryHookResult = ReturnType<typeof useAllJobsLazyQuery>;
export type AllJobsQueryResult = Apollo.QueryResult<AllJobsQuery, AllJobsQueryVariables>;
export const CreateCompanyDocument = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
}
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;
export const CreateJobDocument = gql`
  mutation CreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      id
      title
    }
  }
`;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJobMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
}
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const MeDocument = gql`
  query Me {
    me {
      id
      roles {
        name
      }
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
