import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { eng } from "./styles";

const Title = () => {
  const titleStyles = StyleSheet.create({
    title: {
      fontSize: "13px",
      margin: "10px auto",
    },
    no: {
      fontSize: "10px",
      marginLeft: "15px",
    },
  });

  return (
    <View>
      <View style={titleStyles.title}>
        <Text style={{ fontFamily: eng }}>
          İmam şafi yetimler bakım okulu öğrencilerini otobüslerin ücretleri
        </Text>
      </View>
      <View style={titleStyles.no}>
        <Text>No:</Text>
        <Text style={{ marginTop: "5px" }}>Tarih:</Text>
      </View>
    </View>
  );
};
export default Title;
