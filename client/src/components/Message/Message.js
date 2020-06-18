import React, { Component } from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';


const Message = ({ message: { user, text }, name, prevUser }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    const prevName = (prevUser) ? prevUser.user : '';

    if (isSentByCurrentUser) {
        //your message
        return (
            <div className="messageContainer right">
                {/* <p className="sentText pr-10">{trimmedName}</p> */}
                <div className="messageBubble backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
    } else if (user  === 'admin') {
        //admin message
        return (
            <div className="messageContainer center">
                <p className="sentText adminMessage">{ReactEmoji.emojify(text)}</p>
            </div>
        )
    } else {
        // other user's message
        
        // if continuing message (same sender)
        if (prevName === user) {
            return (
                <div className="messageContainer left">
                    <div className="messageBubble backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
        } else {
            //new sender
            return (
                <div className="messageContainer left">
                    <p className="sentText pl-10" >{user}</p>
                    <div className="messageBubble backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
        }
        
        
    }

};

    


export default Message
