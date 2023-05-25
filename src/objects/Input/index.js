import React from "react";
import "./style.css";

import Label from "../Label";

const Input = ({id = "", value = "", content = "" , type="text"}) => (
    <>
        <input id={id} type={type} value={value} className="input" />
        <Label htmlFor={id} content={content} />
    </>
);

export default Input;
