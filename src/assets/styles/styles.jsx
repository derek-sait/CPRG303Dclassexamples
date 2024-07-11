import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    myCustomTextInput: {
      fontSize: 24,
      backgroundColor: '#aaaaaa',
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      width: 260,
    },
    myCustomImage: {
      width: 200,
      height: 200,
    },
    myCustomText: {
      fontSize: 30,
      color: '#55AA55',
      // textAlign: 'center'
    },
    darkMode: {
      backgroundColor: '#333333',
    },
    lightMode: {
      backgroundColor: '#DDDDDD',
    },
    btn: {
      marginTop: 5,
      padding: 10,
      borderRadius: 5
    }
  });