import React , {useEffect , useState} from "react";
import s from "./counter.module.css"
import DisplayCounter from "./Counter/DisplayCounter/DisplayCounter";
import SettingCounter from "./Counter/SettingCounter/SettingCounter";

const Counter = () => {

    const [buttonIncrementError , setButtonIncrementError] = useState ( true )
    const [value , setValue] = useState ( 0 )
    const [buttonResetError , setbuttonResetError] = useState ( true )
    const [errorMessage , setErrorMessage] = useState ( "" )
    useEffect ( () => {
        const getValue = localStorage.getItem ( "minValue" )
        if ( getValue ) {
            setValue ( +getValue )
            setButtonIncrementError ( false )
            setbuttonResetError ( false )
        }


    } , [] );
    return (
        <div className={s.counter}>
            <DisplayCounter setValue={setValue} value={value} setButtonIncrementError={setButtonIncrementError}
                            buttonIncrementError={buttonIncrementError} buttonResetError={buttonResetError}
                            errorMessage={errorMessage}/>
            <SettingCounter setValue={setValue} setButtonIncrementError={setButtonIncrementError}
                            setbuttonResetError={setbuttonResetError} setErrorMessage={setErrorMessage}/>
        </div>
    );
};
export default Counter;


