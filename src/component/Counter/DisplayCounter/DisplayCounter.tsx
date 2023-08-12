import React , {useState} from 'react';
import Display from "./Display/Display";
import s from './DisplayCounter.module.css'
import Button from "../Button/Button";


type ConfigCounterType = {
    setValue: (value: number) => void
    value: number;
    setButtonIncrementError: (value: boolean) => void;
    buttonIncrementError: boolean;
    buttonResetError: boolean
    errorMessage: string
}
const DisplayCounter: React.FC<ConfigCounterType> = (
    { setValue , value , setButtonIncrementError , buttonIncrementError , buttonResetError , errorMessage }) => {
    const setValueOnClick = () => {
        setValue ( value + 1 );
        const maxValue = localStorage.getItem ( "maxValue" )
        if ( maxValue ) {
            +maxValue - 1 === value && setButtonIncrementError ( !buttonIncrementError );
        }
    }
    const resetValueOnClick = () => {
        setButtonIncrementError ( false )
        const minValue = localStorage.getItem ( "minValue" )
        if ( minValue ) {
            setValue ( +minValue )
        }
    }

    return (
        <div className={s.styleDisplay}>
            <Display value={value} error={buttonIncrementError} errorMessage={errorMessage}/>
            <div className={s.styleButton}>
                <Button disabled={buttonIncrementError} onClick={setValueOnClick}>+</Button>
                <Button disabled={buttonResetError} onClick={resetValueOnClick}>x</Button>
            </div>
        </div>
    );
};

export default DisplayCounter;