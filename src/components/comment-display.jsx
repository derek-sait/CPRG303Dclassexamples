import { FlatList, SafeAreaView, Text, View } from "react-native";

function Comment({cObj}){
    return(
        <View>
            <Text>Name: {cObj.name}</Text>
            <Text>Message: {cObj.msg}</Text>
        </View>
    );
}

export default function CommentDisplay({commentArray}){
    return(
        <SafeAreaView>
            <Text>Comments</Text>
            <FlatList
            data={commentArray}
            renderItem={ ({item}) => <Comment cObj={item} /> }
            keyExtractor={ item => item.id }
            />
        </SafeAreaView>
    );
}