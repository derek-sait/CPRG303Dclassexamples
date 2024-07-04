import { StyleSheet, Text, View } from "react-native";

export default function CompWithProps({personObj}){

    const {fname, age, email} = personObj;

    return(
        <View>
            <Text style={compStyles.bigTxt}>Name: {fname}</Text>
            <Text style={compStyles.bigTxt}>Age: {age}</Text>
            <Text style={compStyles.bigTxt}>Email: {email}</Text>
        </View>
    );
}
let compStyles = StyleSheet.create({
    bigTxt: {
        fontSize: 30,
        color: 'blue'
    }
});