import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { blueColor, eng, grayColor } from "./styles";

const PdfHeader = () => {
  const headerStyle = StyleSheet.create({
    name: {
      margin: "15px auto 5px auto",
      color: grayColor,
      fontSize: "17px",
    },
    number: {
      margin: "0px auto",
      fontSize: "10px",
      color: grayColor,
    },
    border: {
      width: "30%",
      margin: "8px auto",
      backgroundColor: blueColor,
      height: "4px",
      borderRadius: "10px",
    },
  });

  return (
    <View style={{ fontFamily: eng }}>
      <Text style={headerStyle.name}>Eğitim Geliştirme Derneği</Text>
      <Text style={headerStyle.number}>79.003.023 - Kilis</Text>
      <View style={headerStyle.border}></View>
    </View>
  );
};

export default PdfHeader;
