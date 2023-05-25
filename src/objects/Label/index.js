import React from "react";
import './style.css';

const Label = ({content}) => (
    <label htmlFor="check" className="label">{content}</label>    
);

export default Label;