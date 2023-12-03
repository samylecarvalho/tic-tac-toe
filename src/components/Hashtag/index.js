import React from "react";
import './style.css';
import Card from "../../objects/Card";
import Player from "../../objects/Player";

const Hashtag = () => (
    <Card> 
        <ul className="hashtag"> 
            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>

            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>

            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>
            <li className="item"><Player player='' /></li>
        </ul>
    </Card>
);

export default Hashtag;