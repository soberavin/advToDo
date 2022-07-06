type SignTitleProps = {
    showSignIn: boolean;
    setShowSignIn: (setUserData: boolean) => void;
  }
  

export function SignTitle(props: SignTitleProps) {
    function handleSubTitleClick() {
      props.setShowSignIn(!props.showSignIn)
    }
  
    return (
      <div className="title">
        {props.showSignIn ? "Sign in" : "Sign Up"}
        <span className="subTitle" onClick={handleSubTitleClick} >{props.showSignIn ? '/ Sign Up' : '/ Sign in'}</span>
      </div>
    )
}