import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { container } from "./styles";

const InnerTitle = () => {
  const style = StyleSheet.create({
    container: {
      fontSize: "13px",
      textAlign: "center",
      padding: "8px",
      border: "1px solid black",
      ...container,
    },
  });
  return (
    <View style={style.container}>
      <Text>Yöneticiler</Text>
    </View>
  );
};

export default InnerTitle;
