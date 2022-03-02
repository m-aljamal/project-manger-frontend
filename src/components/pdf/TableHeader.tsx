import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ar, blueColor, border, container, width } from "./styles";

const TableHeader = () => {
  const padding = "5px";
  const headerStyle = StyleSheet.create({
    container: {
      ...container,
      marginTop: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "13px",
      textAlign: "center",
      fontFamily: "Roboto",
      backgroundColor: blueColor,
      color: "white",
      alignContent: "center",
    },
    nameEng: {
      width: width[1],
      ...border,
    },
    nameAr: {
      fontFamily: ar,
      width: width[2],
      ...border,
    },
    job: {
      width: width[3],
      ...border,
    },
    sign: {
      width: width[3],
    },

    sharedStayle: {
      width: width[3],
      ...border,
    },
    salary: {
      width: width[4],
      ...border,
    },
  });
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.nameEng}>Adı Soyadı</Text>
      <Text style={headerStyle.nameAr}>اﻹسم واللقب</Text>
      <Text style={headerStyle.job}>Görev</Text>
      <Text style={headerStyle.salary}>Maaş</Text>
      <Text style={headerStyle.sign}>Imza</Text>
    </View>
  );
};

export default TableHeader;
