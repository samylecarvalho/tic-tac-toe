import React from "react";
import "./style.css";

const Input = ({id = "", value = "", type="text"}) => (
    <>
        <input id={id} type={type} value={value} className="input" />
    </>
);

export default Input;
