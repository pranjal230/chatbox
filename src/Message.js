import React,{forwardRef } from 'react'
import "./Message.css"
import {Card,CardContent,Typography} from "@material-ui/core";


const Message = forwardRef(({message,username},ref) => {

    const  isUser = username === message.username;
  

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'} `}>

    <Card className={isUser ? "message_usercard" : "message_guestcard"} >
      <CardContent>
        
        <Typography 
        variant="h5" 
        component="h2"
        color="white"
        >
         {!isUser && `${message.username || 'Unknown'}:`}{message.message}
        </Typography>
        </CardContent>
      
    </Card>


    </div>  
       
    
    )

})

export default Message 
