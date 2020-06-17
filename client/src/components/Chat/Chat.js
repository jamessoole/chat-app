import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';



let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        // console.log(`name: ${name}`)
        // console.log(`room: ${room}`)

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);
        // console.log(socket);

        socket.emit('join', { name: name, room: room }, () => {
        //    alert(error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);
    // useEffect runs only if either of these 2 values change


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

    console.log(message, messages);

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
// login window shiny pattern
// join button focus
// https://css-tricks.com/almanac/selectors/f/focus/
//update url aprse to props instead
