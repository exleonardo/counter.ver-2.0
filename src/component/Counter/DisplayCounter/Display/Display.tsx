import React from "react";
import s from "./display.module.css"


type DisplayValueType = {
    value: number
    error: boolean
    errorMessage?: string
}
const Display: React.FC<DisplayValueType> = ({ value , error , errorMessage }) => {
    const divClassName = s.valueStyle + (error ? ' ' + s.valueStyleError : '')
    const errorClassName = s.errorMessage
    return (
        errorMessage ? <div className={errorClassName}>{errorMessage}</div> :
            <div className={divClassName}>{value}</div>
    );
};

export default Display;

