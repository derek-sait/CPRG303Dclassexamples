import { Button, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";


export default function HomeScreen({navigation}){

    return(
        <View>
            <Text style={mainStyles.myCustomText}>Welcome to my App!</Text>
            <Button title="Go to Test" onPress={ () => navigation.navigate('Test') } />
            <Button title="Go to About" onPress={ () => navigation.navigate('About') } />
            <Button title="Go to Contact" onPress={ () => navigation.navigate('Contact') } />
        </View>
    );
}