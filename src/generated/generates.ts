import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
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

export type CreateProjectDto = {
  nameAr: Scalars['String'];
  nameEn: Scalars['String'];
  type: Scalars['String'];
};

export type CurrentMonthDiscount = {
  __typename?: 'CurrentMonthDiscount';
  absence?: Maybe<Scalars['Float']>;
  approved: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  employee: Employee;
  employeeId: Scalars['String'];
  id: Scalars['String'];
  late?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  punishment?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type CurrentMonthDiscountDto = {
  absence?: InputMaybe<Scalars['Float']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  employeeId: Scalars['String'];
  late?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  punishment?: InputMaybe<Scalars['Float']>;
};

export type Division = {
  __typename?: 'Division';
  divisionNumber?: Maybe<Scalars['Float']>;
  divisionString?: Maybe<Divisions>;
};

export type DivisionInput = {
  divisionNumber?: InputMaybe<Scalars['Float']>;
  divisionString?: InputMaybe<Divisions>;
};

export enum Divisions {
  Division_1 = 'DIVISION_1',
  Division_2 = 'DIVISION_2',
  Division_3 = 'DIVISION_3',
  Division_4 = 'DIVISION_4'
}

export type Employee = {
  __typename?: 'Employee';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currentMonthDiscounts: Array<CurrentMonthDiscount>;
  divisions?: Maybe<Array<Division>>;
  id: Scalars['String'];
  jobTitle?: Maybe<JobTitle>;
  levels?: Maybe<Array<Level>>;
  name: Scalars['String'];
  password: Scalars['String'];
  project: Project;
  projectId?: Maybe<Scalars['String']>;
  role: Role;
  salary?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type EmployeeDto = {
  avatar?: InputMaybe<Scalars['String']>;
  divisions?: InputMaybe<Array<DivisionInput>>;
  jobTitle?: InputMaybe<JobTitle>;
  levels?: InputMaybe<Array<LevelInput>>;
  name: Scalars['String'];
  password: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  salary?: InputMaybe<Scalars['Float']>;
  username: Scalars['String'];
};

export type EmployeesByRole = {
  __typename?: 'EmployeesByRole';
  mangers: Array<Employee>;
  services: Array<Employee>;
  teachers: Array<Employee>;
};

export enum JobTitle {
  Cleaner = 'CLEANER',
  Counselor = 'COUNSELOR',
  DataEntry = 'DATA_ENTRY',
  EducationSupervisor = 'EDUCATION_SUPERVISOR',
  Guard = 'GUARD',
  MediaFotographer = 'MEDIA_Fotographer',
  Principal = 'PRINCIPAL',
  Secretary = 'SECRETARY',
  Teacher = 'TEACHER'
}

export type Level = {
  __typename?: 'Level';
  levelNumber?: Maybe<Scalars['Float']>;
  levelString?: Maybe<Levels>;
};

export type LevelInput = {
  levelNumber?: InputMaybe<Scalars['Float']>;
  levelString?: InputMaybe<Levels>;
};

export enum Levels {
  Grade_1 = 'GRADE_1',
  Grade_2 = 'GRADE_2',
  Grade_3 = 'GRADE_3',
  Grade_4 = 'GRADE_4',
  Grade_5 = 'GRADE_5',
  Grade_6 = 'GRADE_6',
  Grade_7 = 'GRADE_7',
  Grade_8 = 'GRADE_8',
  Grade_9 = 'GRADE_9',
  Grade_10 = 'GRADE_10',
  Grade_11 = 'GRADE_11',
  Grade_12 = 'GRADE_12'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: Employee;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDiscount: CurrentMonthDiscount;
  createEmployee: Employee;
  createProject: Project;
  deleteDiscount: CurrentMonthDiscount;
  login: LoginResponse;
  updateDiscount: CurrentMonthDiscount;
};


export type MutationCreateDiscountArgs = {
  discount: CurrentMonthDiscountDto;
};


export type MutationCreateEmployeeArgs = {
  employee: EmployeeDto;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
};


export type MutationDeleteDiscountArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateDiscountArgs = {
  discount: UpdateCurrentMonthDiscountDto;
  id: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  employees?: Maybe<Array<Employee>>;
  id: Scalars['String'];
  nameAr: Scalars['String'];
  nameEn: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<Employee>;
  findAllEmployees: Array<Employee>;
  findAllProjects: Array<Project>;
  findDiscounts: Array<CurrentMonthDiscount>;
  findEmployeeById: Employee;
  findEmployeesByProjectId: Array<Employee>;
  findEmployeesByRole: EmployeesByRole;
  findProject: Project;
  findProjectEmployeesSalaries: Array<Salaries>;
};


export type QueryFindAllEmployeesArgs = {
  projectId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindAllProjectsArgs = {
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindDiscountsArgs = {
  approved?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindEmployeeByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindEmployeesByProjectIdArgs = {
  projectId: Scalars['String'];
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindEmployeesByRoleArgs = {
  projectId: Scalars['String'];
};


export type QueryFindProjectArgs = {
  id: Scalars['String'];
};


export type QueryFindProjectEmployeesSalariesArgs = {
  projectId: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manger = 'MANGER',
  Service = 'SERVICE',
  Teacher = 'TEACHER'
}

export type Salaries = {
  __typename?: 'Salaries';
  absence?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  late?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  punishment?: Maybe<Scalars['String']>;
  salary: Scalars['Float'];
  totalSalart: Scalars['Float'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateCurrentMonthDiscountDto = {
  absence?: InputMaybe<Scalars['Float']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  employeeId?: InputMaybe<Scalars['String']>;
  late?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  punishment?: InputMaybe<Scalars['Float']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'Employee', name: string, id: string, username: string } } };

export type UpdateDiscountMutationVariables = Exact<{
  id: Scalars['String'];
  discount: UpdateCurrentMonthDiscountDto;
}>;


export type UpdateDiscountMutation = { __typename?: 'Mutation', updateDiscount: { __typename?: 'CurrentMonthDiscount', absence?: number | null, createdAt: any, date: any, id: string, late?: number | null, notes?: string | null, punishment?: number | null, employee: { __typename?: 'Employee', name: string, id: string, role: Role, salary?: number | null } } };

export type CreateDiscountMutationVariables = Exact<{
  absence?: InputMaybe<Scalars['Float']>;
  date: Scalars['DateTime'];
  employeeId: Scalars['String'];
  late?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  punishment?: InputMaybe<Scalars['Float']>;
}>;


export type CreateDiscountMutation = { __typename?: 'Mutation', createDiscount: { __typename?: 'CurrentMonthDiscount', date: any, id: string, late?: number | null, notes?: string | null, absence?: number | null, punishment?: number | null } };

export type DeleteDiscountMutationVariables = Exact<{
  employeeId: Scalars['String'];
}>;


export type DeleteDiscountMutation = { __typename?: 'Mutation', deleteDiscount: { __typename?: 'CurrentMonthDiscount', late?: number | null } };

export type FindDiscountsQueryVariables = Exact<{
  sortBy?: InputMaybe<Sort>;
  projectId?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
}>;


export type FindDiscountsQuery = { __typename?: 'Query', findDiscounts: Array<{ __typename?: 'CurrentMonthDiscount', absence?: number | null, createdAt: any, date: any, id: string, late?: number | null, notes?: string | null, punishment?: number | null, approved: boolean, employee: { __typename?: 'Employee', name: string, id: string, role: Role, salary?: number | null } }> };

export type FindAllEmployeesDiscountsQueryVariables = Exact<{
  projectId: Scalars['String'];
  sortBy?: InputMaybe<Sort>;
}>;


export type FindAllEmployeesDiscountsQuery = { __typename?: 'Query', findEmployeesByProjectId: Array<{ __typename?: 'Employee', name: string, id: string, salary?: number | null, currentMonthDiscounts: Array<{ __typename?: 'CurrentMonthDiscount', absence?: number | null, createdAt: any, date: any, id: string, late?: number | null, notes?: string | null, punishment?: number | null, approved: boolean }> }> };

export type CreateEmployeeMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Float']>;
  username: Scalars['String'];
  role?: InputMaybe<Role>;
  jobTitle?: InputMaybe<JobTitle>;
  divisions?: InputMaybe<Array<DivisionInput> | DivisionInput>;
  levels?: InputMaybe<Array<LevelInput> | LevelInput>;
  avatar?: InputMaybe<Scalars['String']>;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', createdAt: any, id: string, name: string, jobTitle?: JobTitle | null, username: string, salary?: number | null, role: Role, avatar?: string | null, divisions?: Array<{ __typename?: 'Division', divisionNumber?: number | null, divisionString?: Divisions | null }> | null, levels?: Array<{ __typename?: 'Level', levelNumber?: number | null, levelString?: Levels | null }> | null } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'Employee', name: string, id: string, role: Role, username: string } | null };

export type FindAllEmployeesQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sortBy?: InputMaybe<Sort>;
}>;


export type FindAllEmployeesQuery = { __typename?: 'Query', findAllEmployees: Array<{ __typename?: 'Employee', createdAt: any, id: string, name: string, role: Role, salary?: number | null, username: string }> };

export type FindEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindEmployeeByIdQuery = { __typename?: 'Query', findEmployeeById: { __typename?: 'Employee', createdAt: any, id: string, name: string, salary?: number | null, username: string } };

export type FindEmployeesByProjectIdQueryVariables = Exact<{
  projectId: Scalars['String'];
  sortBy?: InputMaybe<Sort>;
}>;


export type FindEmployeesByProjectIdQuery = { __typename?: 'Query', findEmployeesByProjectId: Array<{ __typename?: 'Employee', name: string, id: string, password: string, createdAt: any, salary?: number | null, username: string, avatar?: string | null, jobTitle?: JobTitle | null, divisions?: Array<{ __typename?: 'Division', divisionNumber?: number | null, divisionString?: Divisions | null }> | null, levels?: Array<{ __typename?: 'Level', levelNumber?: number | null, levelString?: Levels | null }> | null }> };

export type FindProjectEmployeesSalariesQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type FindProjectEmployeesSalariesQuery = { __typename?: 'Query', findProjectEmployeesSalaries: Array<{ __typename?: 'Salaries', absence?: string | null, id: string, late?: string | null, name: string, punishment?: string | null, salary: number, totalSalart: number }> };

export type FindEmployeeByRoleQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type FindEmployeeByRoleQuery = { __typename?: 'Query', findEmployeesByRole: { __typename?: 'EmployeesByRole', mangers: Array<{ __typename?: 'Employee', avatar?: string | null, createdAt: any, id: string, jobTitle?: JobTitle | null, name: string, role: Role, salary?: number | null, username: string }>, services: Array<{ __typename?: 'Employee', avatar?: string | null, createdAt: any, id: string, jobTitle?: JobTitle | null, name: string, role: Role, salary?: number | null, username: string }>, teachers: Array<{ __typename?: 'Employee', avatar?: string | null, createdAt: any, id: string, jobTitle?: JobTitle | null, name: string, role: Role, salary?: number | null, username: string, divisions?: Array<{ __typename?: 'Division', divisionNumber?: number | null, divisionString?: Divisions | null }> | null, levels?: Array<{ __typename?: 'Level', levelNumber?: number | null, levelString?: Levels | null }> | null }> } };

export type CreateProjectMutationVariables = Exact<{
  nameAr: Scalars['String'];
  nameEn: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, nameAr: string, nameEn: string, type: string, createdAt: any, updatedAt: any } };

export type FindAllProjectsQueryVariables = Exact<{
  sortBy?: InputMaybe<Sort>;
}>;


export type FindAllProjectsQuery = { __typename?: 'Query', findAllProjects: Array<{ __typename?: 'Project', createdAt: any, id: string, nameAr: string, nameEn: string, type: string, updatedAt: any }> };

export type FindProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindProjectQuery = { __typename?: 'Query', findProject: { __typename?: 'Project', id: string, nameAr: string, nameEn: string, createdAt: any, type: string } };


export const LoginDocument = `
    mutation login($username: String!, $password: String!) {
  login(loginUserInput: {password: $password, username: $username}) {
    accessToken
    user {
      name
      id
      username
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const UpdateDiscountDocument = `
    mutation updateDiscount($id: String!, $discount: UpdateCurrentMonthDiscountDto!) {
  updateDiscount(id: $id, discount: $discount) {
    absence
    createdAt
    date
    id
    late
    notes
    punishment
    employee {
      name
      id
      role
      salary
    }
  }
}
    `;
export const useUpdateDiscountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateDiscountMutation, TError, UpdateDiscountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateDiscountMutation, TError, UpdateDiscountMutationVariables, TContext>(
      ['updateDiscount'],
      (variables?: UpdateDiscountMutationVariables) => fetcher<UpdateDiscountMutation, UpdateDiscountMutationVariables>(client, UpdateDiscountDocument, variables, headers)(),
      options
    );
export const CreateDiscountDocument = `
    mutation createDiscount($absence: Float, $date: DateTime!, $employeeId: String!, $late: Float, $notes: String, $punishment: Float) {
  createDiscount(
    discount: {date: $date, employeeId: $employeeId, absence: $absence, late: $late, notes: $notes, punishment: $punishment}
  ) {
    date
    id
    late
    notes
    absence
    punishment
  }
}
    `;
export const useCreateDiscountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateDiscountMutation, TError, CreateDiscountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateDiscountMutation, TError, CreateDiscountMutationVariables, TContext>(
      ['createDiscount'],
      (variables?: CreateDiscountMutationVariables) => fetcher<CreateDiscountMutation, CreateDiscountMutationVariables>(client, CreateDiscountDocument, variables, headers)(),
      options
    );
export const DeleteDiscountDocument = `
    mutation deleteDiscount($employeeId: String!) {
  deleteDiscount(id: $employeeId) {
    late
  }
}
    `;
export const useDeleteDiscountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteDiscountMutation, TError, DeleteDiscountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteDiscountMutation, TError, DeleteDiscountMutationVariables, TContext>(
      ['deleteDiscount'],
      (variables?: DeleteDiscountMutationVariables) => fetcher<DeleteDiscountMutation, DeleteDiscountMutationVariables>(client, DeleteDiscountDocument, variables, headers)(),
      options
    );
export const FindDiscountsDocument = `
    query findDiscounts($sortBy: Sort, $projectId: String, $approved: Boolean) {
  findDiscounts(sortBy: $sortBy, projectId: $projectId, approved: $approved) {
    absence
    createdAt
    date
    id
    late
    notes
    punishment
    approved
    employee {
      name
      id
      role
      salary
    }
  }
}
    `;
export const useFindDiscountsQuery = <
      TData = FindDiscountsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FindDiscountsQueryVariables,
      options?: UseQueryOptions<FindDiscountsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindDiscountsQuery, TError, TData>(
      variables === undefined ? ['findDiscounts'] : ['findDiscounts', variables],
      fetcher<FindDiscountsQuery, FindDiscountsQueryVariables>(client, FindDiscountsDocument, variables, headers),
      options
    );
export const FindAllEmployeesDiscountsDocument = `
    query findAllEmployeesDiscounts($projectId: String!, $sortBy: Sort) {
  findEmployeesByProjectId(projectId: $projectId, sortBy: $sortBy) {
    name
    id
    salary
    currentMonthDiscounts {
      absence
      createdAt
      date
      id
      late
      notes
      punishment
      approved
    }
  }
}
    `;
export const useFindAllEmployeesDiscountsQuery = <
      TData = FindAllEmployeesDiscountsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindAllEmployeesDiscountsQueryVariables,
      options?: UseQueryOptions<FindAllEmployeesDiscountsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindAllEmployeesDiscountsQuery, TError, TData>(
      ['findAllEmployeesDiscounts', variables],
      fetcher<FindAllEmployeesDiscountsQuery, FindAllEmployeesDiscountsQueryVariables>(client, FindAllEmployeesDiscountsDocument, variables, headers),
      options
    );
export const CreateEmployeeDocument = `
    mutation createEmployee($name: String!, $password: String!, $projectId: String, $salary: Float, $username: String!, $role: Role, $jobTitle: JobTitle, $divisions: [DivisionInput!], $levels: [LevelInput!], $avatar: String) {
  createEmployee(
    employee: {name: $name, username: $username, password: $password, projectId: $projectId, salary: $salary, role: $role, jobTitle: $jobTitle, divisions: $divisions, levels: $levels, avatar: $avatar}
  ) {
    createdAt
    id
    name
    jobTitle
    username
    salary
    role
    divisions {
      divisionNumber
      divisionString
    }
    avatar
    levels {
      levelNumber
      levelString
    }
  }
}
    `;
export const useCreateEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateEmployeeMutation, TError, CreateEmployeeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateEmployeeMutation, TError, CreateEmployeeMutationVariables, TContext>(
      ['createEmployee'],
      (variables?: CreateEmployeeMutationVariables) => fetcher<CreateEmployeeMutation, CreateEmployeeMutationVariables>(client, CreateEmployeeDocument, variables, headers)(),
      options
    );
export const CurrentUserDocument = `
    query currentUser {
  currentUser {
    name
    id
    role
    username
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['currentUser'] : ['currentUser', variables],
      fetcher<CurrentUserQuery, CurrentUserQueryVariables>(client, CurrentUserDocument, variables, headers),
      options
    );
export const FindAllEmployeesDocument = `
    query findAllEmployees($projectId: String, $role: Role, $sortBy: Sort) {
  findAllEmployees(projectId: $projectId, role: $role, sortBy: $sortBy) {
    createdAt
    id
    name
    role
    salary
    username
  }
}
    `;
export const useFindAllEmployeesQuery = <
      TData = FindAllEmployeesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FindAllEmployeesQueryVariables,
      options?: UseQueryOptions<FindAllEmployeesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindAllEmployeesQuery, TError, TData>(
      variables === undefined ? ['findAllEmployees'] : ['findAllEmployees', variables],
      fetcher<FindAllEmployeesQuery, FindAllEmployeesQueryVariables>(client, FindAllEmployeesDocument, variables, headers),
      options
    );
export const FindEmployeeByIdDocument = `
    query findEmployeeById($id: String!) {
  findEmployeeById(id: $id) {
    createdAt
    id
    name
    salary
    username
  }
}
    `;
export const useFindEmployeeByIdQuery = <
      TData = FindEmployeeByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeeByIdQueryVariables,
      options?: UseQueryOptions<FindEmployeeByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeeByIdQuery, TError, TData>(
      ['findEmployeeById', variables],
      fetcher<FindEmployeeByIdQuery, FindEmployeeByIdQueryVariables>(client, FindEmployeeByIdDocument, variables, headers),
      options
    );
export const FindEmployeesByProjectIdDocument = `
    query findEmployeesByProjectId($projectId: String!, $sortBy: Sort) {
  findEmployeesByProjectId(projectId: $projectId, sortBy: $sortBy) {
    name
    id
    password
    createdAt
    salary
    username
    avatar
    jobTitle
    divisions {
      divisionNumber
      divisionString
    }
    levels {
      levelNumber
      levelString
    }
  }
}
    `;
export const useFindEmployeesByProjectIdQuery = <
      TData = FindEmployeesByProjectIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeesByProjectIdQueryVariables,
      options?: UseQueryOptions<FindEmployeesByProjectIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeesByProjectIdQuery, TError, TData>(
      ['findEmployeesByProjectId', variables],
      fetcher<FindEmployeesByProjectIdQuery, FindEmployeesByProjectIdQueryVariables>(client, FindEmployeesByProjectIdDocument, variables, headers),
      options
    );
export const FindProjectEmployeesSalariesDocument = `
    query findProjectEmployeesSalaries($projectId: String!) {
  findProjectEmployeesSalaries(projectId: $projectId) {
    absence
    id
    late
    name
    punishment
    salary
    totalSalart
  }
}
    `;
export const useFindProjectEmployeesSalariesQuery = <
      TData = FindProjectEmployeesSalariesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindProjectEmployeesSalariesQueryVariables,
      options?: UseQueryOptions<FindProjectEmployeesSalariesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindProjectEmployeesSalariesQuery, TError, TData>(
      ['findProjectEmployeesSalaries', variables],
      fetcher<FindProjectEmployeesSalariesQuery, FindProjectEmployeesSalariesQueryVariables>(client, FindProjectEmployeesSalariesDocument, variables, headers),
      options
    );
export const FindEmployeeByRoleDocument = `
    query findEmployeeByRole($projectId: String!) {
  findEmployeesByRole(projectId: $projectId) {
    mangers {
      avatar
      createdAt
      id
      jobTitle
      name
      role
      salary
      username
    }
    services {
      avatar
      createdAt
      id
      jobTitle
      name
      role
      salary
      username
    }
    teachers {
      avatar
      createdAt
      id
      jobTitle
      name
      role
      salary
      username
      divisions {
        divisionNumber
        divisionString
      }
      levels {
        levelNumber
        levelString
      }
    }
  }
}
    `;
export const useFindEmployeeByRoleQuery = <
      TData = FindEmployeeByRoleQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeeByRoleQueryVariables,
      options?: UseQueryOptions<FindEmployeeByRoleQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeeByRoleQuery, TError, TData>(
      ['findEmployeeByRole', variables],
      fetcher<FindEmployeeByRoleQuery, FindEmployeeByRoleQueryVariables>(client, FindEmployeeByRoleDocument, variables, headers),
      options
    );
export const CreateProjectDocument = `
    mutation createProject($nameAr: String!, $nameEn: String!, $type: String!) {
  createProject(project: {nameAr: $nameAr, nameEn: $nameEn, type: $type}) {
    id
    nameAr
    nameEn
    type
    createdAt
    updatedAt
  }
}
    `;
export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      ['createProject'],
      (variables?: CreateProjectMutationVariables) => fetcher<CreateProjectMutation, CreateProjectMutationVariables>(client, CreateProjectDocument, variables, headers)(),
      options
    );
export const FindAllProjectsDocument = `
    query findAllProjects($sortBy: Sort) {
  findAllProjects(sortBy: $sortBy) {
    createdAt
    id
    nameAr
    nameEn
    type
    updatedAt
  }
}
    `;
export const useFindAllProjectsQuery = <
      TData = FindAllProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FindAllProjectsQueryVariables,
      options?: UseQueryOptions<FindAllProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindAllProjectsQuery, TError, TData>(
      variables === undefined ? ['findAllProjects'] : ['findAllProjects', variables],
      fetcher<FindAllProjectsQuery, FindAllProjectsQueryVariables>(client, FindAllProjectsDocument, variables, headers),
      options
    );
export const FindProjectDocument = `
    query findProject($id: String!) {
  findProject(id: $id) {
    id
    nameAr
    nameEn
    createdAt
    type
  }
}
    `;
export const useFindProjectQuery = <
      TData = FindProjectQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindProjectQueryVariables,
      options?: UseQueryOptions<FindProjectQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindProjectQuery, TError, TData>(
      ['findProject', variables],
      fetcher<FindProjectQuery, FindProjectQueryVariables>(client, FindProjectDocument, variables, headers),
      options
    );