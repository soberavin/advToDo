import { useState } from "react"
import { SignIn } from "./signIn"
import { SignTitle } from "./signTitle"
import { SignUp } from "./signUp"

type SignFormPageProps = {

}

export function SignForm(props: SignFormPageProps) {
  const [showSignIn, setShowSignIn] = useState(false)
  return (
    <div className='content'>
      <SignTitle showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      {showSignIn ? <SignIn  /> : <SignUp  setShowSignIn = {setShowSignIn} showSignIn = {showSignIn}/>}
    </div>
  )
}