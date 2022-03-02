import { useProjectId } from "./auth-provider";
import { AiOutlinePieChart } from "react-icons/ai";
export const adminLinks = [
  {
    to: "/",
    label: "لوحة التحكم",
    icon: <AiOutlinePieChart />,
  },
  {
    to: "/projects",
    label: "المشاريع",
    icon: <AiOutlinePieChart />,
  },
  {
    to: "/employees",
    label: "الموظفين",
    icon: <AiOutlinePieChart />,
  },
];

export const useProjectLinks = () => {
  const projectId = useProjectId();
  return [
    {
      label: "الرئيسية",
      to: `/projects/${projectId}`,
      icon: <AiOutlinePieChart />,
    },

    {
      label: "موظفين المشروع",
      to: `/projects/${projectId}/employees`,
      icon: <AiOutlinePieChart />,
    },
    {
      label: "الخصومات",
      to: `/projects/${projectId}/discounts`,
      icon: <AiOutlinePieChart />,
    },
    {
      label: "الرواتب",
      to: `/projects/${projectId}/salaries`,
      icon: <AiOutlinePieChart />,
    },
  ];
};
