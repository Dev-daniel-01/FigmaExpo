import { Footer } from "@/components/footer";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
      <Image style={styles.erro} source={require("@/assets/images/error.jpg")}></Image>
      <Image style={styles.rickErro} source={require("@/assets/images/erro4.png")}></Image>
        <Footer></Footer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",

  },
  erro: {
    marginTop: -100,
    width: 350,
    height: 350,

  },
  rickErro: {
    width: 350,
    height: 350
  }
});
