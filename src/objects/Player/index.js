import React from "react";
import './style.css';
import playerX from '../../images/player-x.png';
import playerO from '../../images/player-o.png';

const Player = ({player}) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (<button className="player">
        <img src={players[player]} alt={`Player ${player.toUpperCase()}`} />
    </button>)
}

export default Player;