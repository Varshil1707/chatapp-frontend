import React from 'react'
import "./Message.css"

const Message = ({user,message,classes}) => {
    if(user ){
      return (
        <div className={`message${classes}`} >
          <p>

          {`${user} : ${message}`}
          </p>
          </div>
      )
    }else {
      return (
        <div className={`message${classes}`} >
          <p>
            {`You : ${message}`}

          </p>
          </div>
      )
    }

}

export default Message  