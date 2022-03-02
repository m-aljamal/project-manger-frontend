import { useForm } from "react-hook-form";
import { Role } from "src/generated/generates";
import { useCreateEmployee } from "src/utils/employees";

const CreateEmployee = () => {
  interface IEmployee {
    name: string;
    salary: number;
    projectId: string;
    role: Role;
    password: string;
    username: string;
  }

  const { error, mutate } = useCreateEmployee();

  const { register, handleSubmit } = useForm<IEmployee>();

  const onSubmit = (data: IEmployee) => {
    mutate({
      name: data.name,
      username: data.name,
      password: data.password,
      //role: Role.Admin,
      projectId: data.projectId,
      salary: +data.salary,
    });
  };

  return (
    <div>
      <h2>إضافة موظف</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" className="block m-1" />
        <input
          {...register("username")}
          placeholder="Username"
          className="block m-1"
        />
        <input
          {...register("password")}
          placeholder="Password"
          className="block m-1"
        />
        <input
          {...register("projectId")}
          placeholder="ProjectId"
          className="block m-1"
        />
        <input
          {...register("salary")}
          placeholder="Salary"
          type="number"
          className="block m-1"
        />
        <button className="bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
