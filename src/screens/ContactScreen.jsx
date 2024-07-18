"use client"

import { Button, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";
import CommentDisplay from "../components/comment-display";
import { useState } from "react";
import CommentForm from "../components/comment-form";

const testData = [
    {
        id: 1,
        name: "Bob",
        msg: "Hello World!"
    },
    {
        id: 2,
        name: "Alice",
        msg: "What's up?"
    },
    {
        id: 3,
        name: "John",
        msg: "Hello everyone!"
    }
];

export default function ContactScreen({navigation}){

    const [commentList, setCommentList] = useState(testData);

    const addNewComment = (newComment) => {
        setCommentList( [...commentList, newComment] );
    }

    return(
        <View>
            <Text style={mainStyles.myCustomText}>Send me a message!</Text>
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
            <CommentForm noOfComments={commentList.length} handleNewComment={addNewComment} />
            <CommentDisplay commentArray={commentList} />
        </View>
    );
}