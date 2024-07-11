import { Button, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";

export default function AboutScreen({navigation}){
    return(
        <View>
            <Text style={mainStyles.myCustomText}>This App was built during my CPRG303 class!</Text>
            <Button title="Go to About... again!" onPress={ () => navigation.navigate('About') } />
            <Button title="Go to Contact" onPress={ () => navigation.navigate('Contact') } />
        </View>
    );
}