import { StyleSheet, Text, View } from "react-native";

function MyComponent() {
  let x = 1;
  let y = 9;
  return (
    <View>
      <Text style={compStyles.compText}>
        Adding {x} to {y} will give {x + y}
      </Text>
    </View>
  );
}

let compStyles = StyleSheet.create({
    compText: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
    }
});

export default MyComponent;