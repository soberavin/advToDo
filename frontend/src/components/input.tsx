import { SyntheticEvent, useEffect } from 'react';
import './input.css'

type InputProps = {
    useDefaultStyles?: boolean;
    value: string;
    onChange: (b:string) => void;
    className?:string;
    placeHolder?: string;
    error?: boolean;
}

export function Input (props: InputProps) {
    function handleInputChange(e: SyntheticEvent){
        const newValue = (e.target as HTMLInputElement).value
        props.onChange(newValue)
    }

    function isInvalidInputValue() {
        return props.error ? 'defaultInputInvalid' : ''
    }

        return <input
            className= {`${props.useDefaultStyles ? "defaultInput" : ''} ${props.className} ${isInvalidInputValue()}`} 
            onChange = {handleInputChange} 
            placeholder = {props.placeHolder}
            value = {props.value}
        />
 
    
}
