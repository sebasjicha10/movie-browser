import React from 'react'
import { Text, View, StyleSheet, Linking, StatusBar } from "react-native"


const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Designed and built</Text>
            <Text style={styles.text1}>by Sebastian Jimenez</Text>
            <Text style={[styles.text2, {marginTop: 12}]}>with the help of</Text>
            <Text style={styles.text2}>The Open Movie Database</Text>
            <Text style={[styles.text2, {textDecorationLine: "underline"}]} onPress={() => Linking.openURL("http://www.omdbapi.com/")}>www.omdbapi.com</Text>
        </View>
    )
}
// Red
const red = "#DC3333"

// Styling
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: red,
    },
    text1: {
        fontSize: 22,
        color: "white",
        marginBottom: 2,
    },
    text2: {
        fontSize: 14,
        color: "white",
        marginBottom: 2,
    },
    link: { 
    }
  });


export default SettingsScreen