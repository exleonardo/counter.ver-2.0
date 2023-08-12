import React from "react";
import s from "./button.module.css"


type ButtonType = {
    disabled?: boolean
    onClick: () => void
    children: string

}
const Button: React.FC<ButtonType> = ({ disabled , onClick , ...restProps }) => {

    const buttonClassName = s.button

    return (
        <button className={buttonClassName} disabled={disabled} onClick={onClick} {...restProps}/>
    );
};
export default Button;