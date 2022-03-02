import { useForm } from "react-hook-form";
import { useCreateProject } from "src/utils/project";

const CreateProject = () => {
  interface IProject {
    nameAr: string;
    nameEn: string;
    type: string;
  }

  const { mutate, error } = useCreateProject();

  const { register, handleSubmit } = useForm<IProject>();

  const onSubmit = (data: IProject) => {
    mutate(data);
  };

  return (
    <div>
      <h2>انشاء مشروع</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nameAr")} placeholder="الاسم" />
        <input {...register("nameEn")} placeholder="Name" />
        <input {...register("type")} placeholder="النوع" />
        <button type="submit">انشاء</button>
      </form>
    </div>
  );
};

export default CreateProject;
