"use client"
import { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";

export default function CommentForm({noOfComments, handleNewComment}){

    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const handleNameChange = (value) => setName(value);
    const handleMessageChange = (value) => setMessage(value);
    const handleSubmit = () => {
        let newComment = {
            id: noOfComments + 1,
            name: name,
            msg: message
        }
        handleNewComment(newComment);
        setName("");
        setMessage("");
    }

    return(
        <SafeAreaView>
            <Text>Please leave us a comment!</Text>
            <Text>Name:</Text>
            <TextInput onChangeText={handleNameChange} value={name} />
            <Text>Message:</Text>
            <TextInput onChangeText={handleMessageChange} value={message} />
            <Button title="Submit Message" onPress={handleSubmit}  />
        </SafeAreaView>
    );
}