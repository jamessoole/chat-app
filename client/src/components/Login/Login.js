import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');    
    
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="joinLine">Login</h1>
                <div><input 
                    placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} 
                    onKeyPress={(event) => event.key === 'Enter' ? document.querySelector("button").click() : null } 
                /></div>
                
                <div><input 
                    placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} 
                    onKeyPress={(event) => event.key === 'Enter' ? document.querySelector("button").click() : null } 
                /></div>

                {/* could update with props instead */}
                <Link 
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    
                    to={`./chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">Chat</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;

// onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
