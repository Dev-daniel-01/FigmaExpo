import { Footer } from "@/components/footer";
import { router } from "expo-router";
import {
    Image,
    SafeAreaView, StyleSheet, Text,
    TouchableOpacity
} from "react-native";



export default function HomeScreen() {


  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("@/assets/images/rick-morty.png")}></Image>
            <Image style={styles.title} source={require("@/assets/images/logo.webp")}></Image>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text  style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            <Footer></Footer>
      </SafeAreaView>
     
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        paddingTop: 50,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#EEEC88",
        gap: 70
        
    },
    logo: {
        width: 250,
        height: 200,
        marginBottom: 70
    },
    title: {
        width: "90%",
        height: 90 
    },
    btn: {
        backgroundColor: "#3C436A",
        width: 250,
        height: 50,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      
        // Sombra para Android
        elevation: 8,

    },
    btnText: {
        color: "white",
        fontSize: 20
    }

});
