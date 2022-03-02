import {
  FindAllProjectsQuery,
  FindProjectQuery,
  useFindAllProjectsQuery,
  useFindProjectQuery,
} from "./../generated/generates";
import { useQueryClient } from "react-query";
import { useAuth, useAuthClient } from "src/context/auth-context";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  Sort,
  useCreateProjectMutation,
} from "src/generated/generates";

function useProjectsList(sortBy: Sort) {
  const { client } = useAuthClient();
  const { status, data, error, isFetching, isLoading } =
    useFindAllProjectsQuery<FindAllProjectsQuery, Error>(client(), {
      sortBy,
    });
  return {
    projects: data?.findAllProjects || [],
    error,
    isFetching,
    status,
    isLoading,
  };
}

function useCreateProject() {
  const queryClient = useQueryClient();
  const { client } = useAuthClient();
  const { mutate, error } = useCreateProjectMutation<Error>(client(), {
    onSuccess: (
      data: CreateProjectMutation,
      _variables: CreateProjectMutationVariables,
      _context: unknown
    ) => {
      queryClient.invalidateQueries("findAllProjects");
    },
    onError: (error: Error) => {
      console.log(error);
    },
    onSettled: () => queryClient.invalidateQueries("findAllProjects"),
  });
  return { mutate, error };
}

function useProject() {
  const { client, projectId } = useAuthClient();
  const { data, status, error } = useFindProjectQuery<FindProjectQuery, Error>(
    client(),
    { id: projectId }
  );
  return {
    project: data?.findProject,
    status,
    error,
  };
}

export { useProjectsList, useCreateProject, useProject };
