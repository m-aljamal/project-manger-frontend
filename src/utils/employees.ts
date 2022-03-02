import {
  FindEmployeeByRoleQuery,
  useFindEmployeeByRoleQuery,
} from "./../generated/generates";
import {
  Employee,
  FindAllEmployeesQuery,
  FindEmployeeByIdQuery,
  FindEmployeesByProjectIdQuery,
  FindProjectEmployeesSalariesQuery,
  Role,
  Sort,
  useFindAllEmployeesQuery,
  useFindEmployeeByIdQuery,
  useFindEmployeesByProjectIdQuery,
  useFindProjectEmployeesSalariesQuery,
} from "src/generated/generates";
import { useAuthClient } from "src/context/auth-context";

import { useQueryClient } from "react-query";
import {
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  useCreateEmployeeMutation,
} from "../generated/generates";

import graphqlRequestClient from "../lib/graphqlRequestClient";

function useFindProjectsEmployees() {
  const { client, projectId } = useAuthClient();
  const { data, error, isLoading } = useFindEmployeesByProjectIdQuery<
    FindEmployeesByProjectIdQuery,
    Error
  >(client(), {
    projectId: projectId,
    sortBy: Sort.Desc,
  });
  return {
    employees: data?.findEmployeesByProjectId || [],
    error,
    isLoading,
  };
}

function useCreateEmployee() {
  const queryClient = useQueryClient();
  const { mutate, error } = useCreateEmployeeMutation<Error>(
    graphqlRequestClient(),
    {
      onSuccess: (
        data: CreateEmployeeMutation,
        _variables: CreateEmployeeMutationVariables,
        _context: unknown
      ) => {
        queryClient.invalidateQueries("findEmployeesByProjectId");
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );
  return { mutate, error };
}

function useFindAllEmployees(role?: Role) {
  const { client } = useAuthClient();
  const { data, error, status } = useFindAllEmployeesQuery<
    FindAllEmployeesQuery,
    Error
  >(client(), { role });
  return {
    employees: data?.findAllEmployees || [],
    error,
    status,
  };
}

function useFindEmployee(id: string) {
  const { client } = useAuthClient();
  const { data, status } = useFindEmployeeByIdQuery<
    FindEmployeeByIdQuery,
    Error
  >(client(), {
    id,
  });
  return {
    employee: data?.findEmployeeById,
    status,
  };
}

function useFindEmployeesSalaries(projectId: string) {
  const { client } = useAuthClient();
  const { data, status, isLoading } = useFindProjectEmployeesSalariesQuery<
    FindProjectEmployeesSalariesQuery,
    Error
  >(client(), {
    projectId,
  });
  return {
    employees: data?.findProjectEmployeesSalaries || [],
    status,
    isLoading,
  };
}

function useFindEmployeesByRole() {
  const { client, projectId } = useAuthClient();
  const { data, status, isError } = useFindEmployeeByRoleQuery<
    FindEmployeeByRoleQuery,
    Error
  >(client(), {
    projectId,
  });
  return {
    mangers: data?.findEmployeesByRole.mangers || [],
    services: data?.findEmployeesByRole.services || [],
    teachers: data?.findEmployeesByRole.teachers || [],
  };
}

export {
  useFindProjectsEmployees,
  useCreateEmployee,
  useFindAllEmployees,
  useFindEmployee,
  useFindEmployeesSalaries,
  useFindEmployeesByRole,
};
