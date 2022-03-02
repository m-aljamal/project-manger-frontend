import { useParams } from "react-router-dom";
import { Salaries } from "src/generated/generates";
import { useFindEmployeesSalaries } from "src/utils/employees";
import ReactPDF, { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
 
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "src/components/pdf";
 
const SalariesScreen = () => {
  const { projectId } = useParams();
  const { employees, status, isLoading } = useFindEmployeesSalaries(
    projectId as string
  );

  return (
    <div>
      <h2>قائمة الرواتب </h2>
      <Pdf/>
    </div>
  );
};

interface EmployeeSalaryProps {
  employee: Salaries;
}

const EmployeeSalary = ({ employee }: EmployeeSalaryProps) => {
  return (
    <>
      <div className="bg-white m-3 p-2">
        <div style={{ display: "flex", gap: "30px" }}>
          <p>الاسم</p>
          <p>{employee.name}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>الراتب</p>
          <p>{employee.salary}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>الغياب</p>
          <p>{employee.absence}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>التأخير</p>
          <p>{employee.late}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>العقوبات</p>
          <p>{employee.punishment}</p>
        </div>
        <div style={{ display: "flex", gap: " 30px" }}>
          <p>الإجمالي</p>
          <p>{employee.totalSalart}</p>
        </div>
      </div>
    </>
  );
};

export default SalariesScreen;

// <PDFDownloadLink document={<Pdf />} fileName="somename.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? "Loading document..." : "Download now!"
//         }
//       </PDFDownloadLink>
