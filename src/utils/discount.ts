import { useUpdateDiscountMutation } from "./../generated/generates";
import { useQueryClient } from "react-query";
import { useAuthClient } from "src/context/auth-context";
import {
  FindDiscountsQuery,
  Sort,
  useCreateDiscountMutation,
  useDeleteDiscountMutation,
  useFindDiscountsQuery,
} from "src/generated/generates";

function useCreateDiscount() {
  const queryClient = useQueryClient();
  const { client } = useAuthClient();
  const { mutate, error } = useCreateDiscountMutation<Error>(client(), {
    onSettled: () => queryClient.invalidateQueries("findDiscounts"),
  });
  return { mutate, error };
}

function useEmployeesListDiscounts(
  projectId?: string,
  sortBy?: Sort,
  approved?: boolean
) {
  const { client } = useAuthClient();
  const { data, error } = useFindDiscountsQuery<FindDiscountsQuery, Error>(
    client(),
    {
      projectId,
      sortBy,
      approved,
    }
  );
  return {
    discounts: data?.findDiscounts || [],
    error,
  };
}

function useDeleteDiscount() {
  const queryClient = useQueryClient();
  const { client } = useAuthClient();
  const { mutate, error } = useDeleteDiscountMutation<Error>(client(), {
    onSettled: () => queryClient.invalidateQueries("findDiscounts"),
  });
  return { mutate, error };
}

function useUpdateDiscount() {
  const queryClient = useQueryClient();
  const { client } = useAuthClient();
  const { mutate, error } = useUpdateDiscountMutation<Error>(client(), {
    onSettled: () => queryClient.invalidateQueries("findDiscounts"),
  });
  return { mutate, error };
}

export {
  useCreateDiscount,
  useEmployeesListDiscounts,
  useDeleteDiscount,
  useUpdateDiscount,
};
