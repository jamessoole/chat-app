import React, { Component } from 'react'
import './InfoBar.css'
import closeIcon from '../../icons/closeIcon.png';
import moonIcon from '../../icons/moonIcon.png';
import sunIcon from '../../icons/sunIcon.png';



//Alternating Colors and Icon
function toggleMode() {
    let root = document.documentElement;
    let icon = document.querySelector('.colorIcon');
    
    if (root.classList.contains('alternateColors')) {
        root.classList.remove('alternateColors');
        icon.classList.replace('sunIcon', 'moonIcon');
        icon.src= moonIcon;
        
    } else {
        root.classList.add('alternateColors');
        icon.classList.replace('moonIcon', 'sunIcon');
        icon.src= sunIcon;
    }
}


const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <h3>{`# ${room}`}</h3>
        </div>
        <div className="middleInnerContainer">
            <button className="colorButton" onClick={toggleMode} ><img alt="Sun Icon" className="colorIcon moonIcon" src={moonIcon}/></button>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} className="closeIcon"alt="close" /></a>
        </div>
    </div>
);  

    


export default InfoBar
