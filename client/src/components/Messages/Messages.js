import React, { Component } from 'react';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
import { Scrollbars } from 'react-custom-scrollbars';

import './Messages.css';

import Message from '../Message/Message'


const Messages = ({ messages, name }) => (    
    
    <ScrollToBottom className="messages">
        <div className="innerScroll">
          {messages.map((message, i) => <div key={i} ><Message message={message} name={name} prevUser={messages.slice(i - 1)[0]} /></div>)}
        </div>
    </ScrollToBottom>


    
);

    
export default Messages
