import { useState } from "react"
import { Button } from "../../../components/btn"
import { Input } from "../../../components/input"
import { UserLoginPayload } from "../../../models/user"
import { myStore } from "../../../store/myStore"


type SignUpProps = {
    setShowSignIn: (isActive: boolean) => void,
    showSignIn: boolean
}


export function SignUp(props: SignUpProps) {
    const [loginInputValue, setLoginInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [rePasswordInputValue, setRePasswordInputValue] = useState('')

    function handleSignUpButtonClick() {
        const reqData: UserLoginPayload = { login: loginInputValue, password: passwordInputValue }
        myStore.signUp(reqData, () => props.setShowSignIn(true))
    }

    function isValidUserInput() {
        const isValidLogin = loginInputValue.length >= 3
        const isValidPassword = passwordInputValue.length >= 5
        const passwordsMatch = passwordInputValue === rePasswordInputValue
        return isValidLogin && isValidPassword && passwordsMatch
    }
    return (
        <>
          <Input value={loginInputValue} onChange={setLoginInputValue} useDefaultStyles className='inputBottomMargin' placeHolder='LOGIN' />
          <Input error = {passwordInputValue !== rePasswordInputValue} value={passwordInputValue} onChange={setPasswordInputValue} useDefaultStyles className='inputBottomMargin' placeHolder='PASSWORD' />
          <Input error = {passwordInputValue !== rePasswordInputValue} value={rePasswordInputValue} onChange={setRePasswordInputValue} useDefaultStyles className='inputBottomMargin' placeHolder='REPEAT PASSWORD' />
          <Button isDisabled = {!isValidUserInput()} useDefaultStyles innerText='SUBMIT' className='submitBtn' onClick={handleSignUpButtonClick} />
        </>
      )
}