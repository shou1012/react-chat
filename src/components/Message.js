import React from "react";


export default class Message extends React.Component {
  render() {
    return ( <div className = "Message" >
      <
      img className = ""
      src = {
        this.props.message.profile_image
      }
      /> <div className = "" >
      <p className = "" > @ {
        this.props.message.user_name
      } </p> <p className = "" > {
        this.props.message.text
      } </p> </div> </div>
    );
  }
}
