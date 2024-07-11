import { Button, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";

export default function ContactScreen({navigation}){
    return(
        <View>
            <Text style={mainStyles.myCustomText}>Send me a message!</Text>
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
        </View>
    );
}