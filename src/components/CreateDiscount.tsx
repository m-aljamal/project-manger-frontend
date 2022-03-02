import React from "react";
import { useForm } from "react-hook-form";
import { CreateDiscountMutationVariables } from "src/generated/generates";
import { useCreateDiscount } from "src/utils/discount";
const CreateDiscount = () => {
  const { register, handleSubmit } = useForm<CreateDiscountMutationVariables>();
  const { mutate } = useCreateDiscount();
  const onSubmit = (data: CreateDiscountMutationVariables) => {
    mutate({
      date: data.date,
      employeeId: data.employeeId,
      absence: data.absence ? +data.absence : null,
      late: data.late ? +data.late : null,
      notes: data.notes,
      punishment: data.punishment ? +data.punishment : null,
    });
  };
  return (
    <div>
      <p>اضافة خصم جديد</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("employeeId")}
          placeholder="employeeId"
          className="block m-1"
        />
        <input
          {...register("absence")}
          placeholder="absence"
          className="block m-1"
          type="number"
        />
        <input
          {...register("late")}
          placeholder="late"
          className="block m-1"
          type="number"
        />
        <input
          {...register("punishment")}
          placeholder="punishment"
          className="block m-1"
          type="number"
        />
        <input
          {...register("notes")}
          placeholder="notes"
          className="block m-1"
        />
        <input
          type="date"
          {...register("date")}
          placeholder="date"
          className="block m-1"
        />
        <button className="bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDiscount;
