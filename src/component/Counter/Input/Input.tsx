import React , {ChangeEvent} from "react";
import s from "./Input.module.css"


type InputType = {
    value: string
    onChange: (value: string) => void
    error: boolean
}
const Input: React.FC<InputType> = ({ value , onChange , error , ...restProps }) => {
    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {

        onChange ( e.currentTarget.value )
    }
    const inputClassName = s.input + (error ? " " + s.inputError : "")
    return (
        <div className={s.maxValueInputStyle}>
            <input className={inputClassName} type={"number"} value={value} onChange={onChangeCallBack}/>
        </div>
    );
};
export default Input;