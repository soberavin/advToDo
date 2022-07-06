import './btn.css'

type ButtonProps = {
    useDefaultStyles?: boolean;

    innerText: string;
    onClick?: () => void;
    className: string;
    isDisabled?: boolean;
}

export function Button(props: ButtonProps){
    return <button disabled = {props.isDisabled} className = {props.className + (props.useDefaultStyles ? ' defaultBtn' : "")} onClick={props.onClick}>{props.innerText}</button>
}