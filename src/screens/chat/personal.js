import React, { Component } from "react";
import firebase from "firebase";
import { GiftedChat } from "react-native-gifted-chat";

// const user = {
//   id: "10001",
//   name: "name penerima",
//   imageUrl:"img"
// }
export default class Chatty extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user:{
        id: this.props.navigation.state.params.id_guide,
        name:this.props.navigation.state.params.guide_name,
      },
      uid: this.props.navigation.state.params.id_user,
      name: this.props.navigation.state.params.nama_user,
      text: "",
      messagesList: []
    };
  }
  async componentDidMount() {
    // const this.state.user = {
    //   id: "this.props.navigation.state.params.",
    //   name: "name penerima",
    //   imageUrl: "img"
    // };

    let firebaseConfig = {
      apiKey: "AIzaSyBhweWoZS9hUeUYII27hC1lStA12p_P7Oo",
      authDomain: "chatayo-345d4.firebaseapp.com",
      databaseURL: "https://chatayo-345d4.firebaseio.com",
      projectId: "chatayo-345d4",
      storageBucket: "",
      messagingSenderId: "489984293786",
      appId: "1:489984293786:web:106b44b3b39d6c78"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    await firebase
      .database()
      .ref("messages")
      .child("guide")
      .child(this.state.user.id)
      .child(this.state.user.name)
      .child(this.state.name)
      .on("child_added", value => {
        this.setState(previousState => {
          return {
            messagesList: GiftedChat.append(
              previousState.messagesList,
              value.val()
            )
          };
        });
      });
  }
  sendMessage = async () => {
    if (this.state.text.length > 0) {
      let msgId = firebase
        .database()
        .ref("messages")
        .child("guide")
        .child(this.state.user.id)
        .child(this.state.user.name)
        .child(this.state.name)
        .push().key;
      let updates = {};
      let message = {
        _id: msgId,
        text: this.state.text,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          _id: this.state.user.id,
        }
      };
      updates[
        "messages/" + "guide/"+
          this.state.user.id +
          "/" +
          this.state.user.name +
          "/" +
          this.state.name +
          "/" +
          msgId
      ] = message;
      updates[
        "messages/" +"user/"+
          this.state.uid +
          "/" +
          this.state.name +
          "/" +
          this.state.user.name +
          "/" +
          msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <GiftedChat
        text={this.state.text}
        messages={this.state.messagesList}
        onSend={this.sendMessage}
        user={{
          _id: this.state.user.id
        }}
        onInputTextChanged={value => this.setState({ text: value })}
      />
    );
  }
}