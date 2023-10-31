import React from "react";
import "./style.css";

import Title from "../Title";
import Description from "../Description";
import Social from "../../components/Social";

const Content = () => (
    <article className="content">
        <Title />
        <Description />
        <Social />    
    </article>
)

export default Content;
