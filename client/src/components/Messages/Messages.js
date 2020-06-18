import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

import Message from '../Message/Message'


const Messages = ({ messages, name }) => (    
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i} ><Message message={message} name={name} prevUser={messages.slice(i - 1)[0]} /></div>)}
    </ScrollToBottom>
);

    


export default Messages
