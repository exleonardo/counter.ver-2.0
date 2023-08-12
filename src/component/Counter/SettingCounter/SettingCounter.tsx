import React , {useEffect , useState} from 'react';
import s from "./SettingCounter.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";


type SettingCounterType = {
    setValue: (value: number) => void;
    setButtonIncrementError: (value: boolean) => void;
    setbuttonResetError: (value: boolean) => void
    setErrorMessage: (value: string) => void
}
const SettingCounter: React.FC<SettingCounterType> = (
    {
        setValue , setButtonIncrementError , setbuttonResetError , setErrorMessage
    }) => {

    const [error , setError] = useState ( true )
    //------------------------------------------------------
    const [inputMaxError , setMaxInputError] = useState ( true )
    const [inputMinError , setMinInputError] = useState ( true )
    //--------------------------------------------------------
    const [minValue , setMinvalue] = useState ( "" )
    const [maxValue , setMaxValue] = useState ( "" )
    useEffect ( () => {
        let minValue = localStorage.getItem ( "minValue" )
        let maxValue = localStorage.getItem ( "maxValue" )
        if ( minValue ) {
            setMinvalue ( minValue )
        }
        if ( maxValue ) {
            setMaxValue ( maxValue )
        }


    } , [] );
    const onClickSaveValueHandler = () => {
        setButtonIncrementError ( false )
        setbuttonResetError ( false )
        setError ( true )
        setValue ( +minValue )
        setErrorMessage ( "" )
        localStorage.setItem ( "maxValue" , maxValue )
        localStorage.setItem ( "minValue" , minValue )
    }
    const onChangeMinValueHandler = (value: string) => {
        setMinvalue ( value )
        setError ( false )
        setErrorMessage ( "Enter values and press set" )
        setbuttonResetError ( true )
        setButtonIncrementError ( true )
        setMinInputError ( false )
        if ( +value < 0 ) {
            setButtonIncrementError ( true )
            setError ( true )
            setMinInputError ( true )
            setErrorMessage ( "Error! Please enter valid number!" )
        } else if ( +value > +maxValue ) {
            setError ( true )
            setMinInputError ( true )
            setMaxInputError ( false )
            setErrorMessage ( "Error! Please enter valid number!" )
        } else if ( value === maxValue ) {
            setButtonIncrementError ( true )
            setError ( true )
            setMinInputError ( true )
            setErrorMessage ( "Error! Please enter valid number!" )
        } else if ( +value >= 0 && +maxValue < 0 ) {
            setButtonIncrementError ( true )
            setError ( true )
            setMinInputError ( true )
            setErrorMessage ( "Error! Please enter valid number!" )
        } else if ( maxValue === "" ) {
            setButtonIncrementError ( true )
            setError ( true )
            setMinInputError ( true )
            setErrorMessage ( "Error! Please enter valid number!" )
        } else {
            setButtonIncrementError ( true )
            setError ( false )
            setMinInputError ( false )
            setMaxInputError ( false )
        }
    }
    const onChangeMaxValueHandler = (value: string) => {
        setMaxValue ( value )
        setError ( false )
        setErrorMessage ( "Enter values and press set" )
        setbuttonResetError ( true )
        setButtonIncrementError ( false )
        setMaxInputError ( false )
        if ( +value < 0 ) {
            setErrorMessage ( "Error! Please enter valid number!" )
            setError ( true )
            setButtonIncrementError ( true )
            setMaxInputError ( true )
        } else if ( +value < +minValue ) {
            setErrorMessage ( "Error! Please enter valid number!" )
            setButtonIncrementError ( true )
            setError ( true )
            setMaxInputError ( true )
        } else if ( value === minValue ) {
            setErrorMessage ( "Error! Please enter valid number!" )
            setButtonIncrementError ( true )
            setError ( true )
            setMaxInputError ( true )
        } else if ( +value >= 0 && +minValue < 0 ) {
            setErrorMessage ( "Error! Please enter valid number!" )
            setButtonIncrementError ( true )
            setError ( true )
            setMaxInputError ( true )
        } else if ( minValue === "" ) {
            setErrorMessage ( "Error! Please enter valid number!" )
            setButtonIncrementError ( true )
            setError ( true )
            setMaxInputError ( true )
        } else {
            setError ( false )
            setButtonIncrementError ( true )
            setMaxInputError ( false )
            setMinInputError ( false )
        }
    }
    return (
        <div className={s.setting}>
            <div className={s.InputStyle}>
                <div className={s.styleValue}>
                    <div>Max value:</div>
                    <Input error={inputMaxError} value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.styleValue}>
                    <div>Min value:</div>
                    <Input error={inputMinError} value={minValue} onChange={onChangeMinValueHandler}/>
                </div>
            </div>
            <div className={s.setCenter}><Button disabled={error} onClick={onClickSaveValueHandler}>SET</Button>
            </div>
        </div>
    );
};

export default SettingCounter;