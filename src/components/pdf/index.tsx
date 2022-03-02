import { PDFDownloadLink } from "@react-pdf/renderer";
import { Document, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { useFindEmployeesSalaries } from "src/utils/employees";
import InnerTitle from "./InnerTitle";
import PdfPage from "./PdfPage";
import TableHeader from "./TableHeader";
import Title from "./Title";
import EmployeesTable from "./EmployeesTable";
Font.register({ family: "Arabic", src: require("src/utils/tajawal.ttf") });
Font.register({ family: "Roboto", src: require("src/utils/Roboto.ttf") });

const mainStyles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
});
const Index = () => {
  // const { projectId } = useParams();
  // const { employees, status, isLoading } = useFindEmployeesSalaries(
  //   projectId as string
  // );

  // if (isLoading) return <div>Loading...</div>;
  const pdf = (
    <Document title="this is title">
      <PdfPage>
        <Title />
        <TableHeader />
        <InnerTitle />
        <EmployeesTable />
      </PdfPage>
    </Document>
  );
  return (
    <>
      {/* <PDFViewer style={mainStyles.viewer}>{pdf}</PDFViewer> */}
      <PDFDownloadLink
        document={pdf}
        fileName={"Quote" + new Date().getTime() + ".pdf"}
      >
        {({ blob, url, loading, error }: any) =>
          loading ? "Loading . . ." : "Download"
        }
      </PDFDownloadLink>
    </>
  );
};

export default Index;
