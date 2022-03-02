import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ar, container, eng, width } from "./styles";

const EmployeesTable = () => {
  const padding = "15px 0 15px 0";
  const headerStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "10px",
      textAlign: "center",
      ...container,
      fontFamily: eng,
      backgroundColor: "white",
      color: "black",
      alignContent: "center",
    },
    name: {
      width: width[1],
      borderRightWidth: "1px",
      borderLeftWidth: "1px",
      borderBottomWidth: "1px",
      borderRightColor: "black",
      padding,
    },
    nameAr: {
      fontFamily: ar,
      width: width[2],
      borderRightWidth: "1px",
      borderRightColor: "black",
      borderBottomWidth: "1px",
      padding,
    },
    sign: {
      width: width[3],
      padding,
      borderBottomWidth: "1px",
      color: "white",
      borderRightWidth: "1px",
    },

    sharedStayle: {
      width: width[3],
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      borderRightColor: "black",
      padding,
    },
    salary: {
      width: width[4],
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      padding,
    },
  });
  return (
    <>
      <View style={headerStyle.container}>
        <Text style={headerStyle.name}>Mohammad aljamal</Text>
        <Text style={headerStyle.nameAr}>محمد الجمل</Text>
        <Text style={headerStyle.sharedStayle}>Programmer</Text>
        <Text style={headerStyle.salary}>1500 TL</Text>
        <Text style={headerStyle.sign}>S</Text>
      </View>
    </>
  );
};

export default EmployeesTable;
