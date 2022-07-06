import { useState } from "react"
import { Button } from "../../../components/btn"
import { Input } from "../../../components/input"
import { UserLoginPayload } from "../../../models/user"
import { myStore } from "../../../store/myStore"

type SignInProps = {
  
}

export function SignIn(props: SignInProps) {
  const [loginInputValue, setLoginInputValue] = useState('')
  const [passwordInputValue, setPasswordInputValue] = useState('') 


  function handleLoginButtonClick() {
    const reqData: UserLoginPayload = {login: loginInputValue, password: passwordInputValue}
    myStore.signIn(reqData)
  }

  return (
    <>
      <Input value= {loginInputValue} onChange={setLoginInputValue} useDefaultStyles className='inputBottomMargin' placeHolder='LOGIN' />
      <Input value= {passwordInputValue} onChange={setPasswordInputValue} useDefaultStyles className='inputBottomMargin' placeHolder='PASSWORD' />
      <Button innerText='LOGIN' className='submitBtn' useDefaultStyles onClick={handleLoginButtonClick} />
    </>
  )
}