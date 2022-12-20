import React from 'react'
import "./Message.css"

const Message = ({user,message,classes}) => {
    if(user ){
      return (
        <div className={`message${classes}`} >{`${user} : ${message}`}</div>
      )
    }else {
      return (
        <div className={`message${classes}`} >{`You : ${message}`}</div>
      )
    }

}

export default Message  