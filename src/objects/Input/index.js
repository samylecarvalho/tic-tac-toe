import React from "react";
import "./style.css";

import Label from "../Label";

const Input = ({id, value, content}) => (
    <>
        <input id={id} type="checkbox" value={value} className="input" />
        <Label htmlFor={id} content={content} />
    </>
);

export default Input;
