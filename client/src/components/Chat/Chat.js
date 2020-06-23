import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';



let socket;

const Chat = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    const inputName = props.location.state.inputName;
    const inputRoom = props.location.state.inputRoom;


    
    useEffect(() => {
        // console.log(`name: ${inputName}`)
        // console.log(`room: ${inputRoom}`)
 
        setName(inputName);
        setRoom(inputRoom);

        socket = io(ENDPOINT);
        // console.log(socket);

        socket.emit('join', { name: inputName, room: inputRoom }, () => {
        //    alert(error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, inputName, inputName]);
    // useEffect runs only if any of these values change


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
          
    }, [messages]);


    const sendMessage = (event) => {
        event.preventDefault();
        
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(`message: ${message}, messages: ${messages}`);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )


}

export default Chat;




//TODO
// fancy input placholder moves
// error if fields not used in join page

//different rooms

//Typing Indicator - have gotten to work, just extremely laggy