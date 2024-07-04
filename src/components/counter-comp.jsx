import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        // counter = counter + 1; // don't do this!!
        setCounter(counter + 1);
    }
    const resetCounter = () => {
        setCounter(0);
    }

    return(
        <View>
            <Text style={compStyles.bigTxt}>Counter: {counter}</Text>
            <Button title="Increment Counter!" onPress={incrementCounter}/>
            <Button title="Reset Counter!" onPress={resetCounter}/>
        </View>
    )
}
let compStyles = StyleSheet.create({
    bigTxt: {
        fontSize: 30,
        color: 'blue'
    }
});