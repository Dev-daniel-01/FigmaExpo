import { View, StyleSheet, Text } from "react-native";
import  { Image } from "expo-image"

export const Item = ({name, motor, image}: {name: string, motor: string, image: string}) => {

    return(
        <View style={styles.itemList}>
            <Image style={styles.imageStyle} source={image}></Image>
            <View>
            <Text style={styles.Tcard}>{name}</Text>
            <Text style={styles.Tcard}>{motor}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3C436A',
        margin: 10,
        paddingHorizontal: 10,
        width: '95%',
        height: 100,
        borderRadius: 20,
        
    },
    imageStyle: {
        width: 100,
        height: 50,
        zIndex: 999
    },
    Tcard: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }

})