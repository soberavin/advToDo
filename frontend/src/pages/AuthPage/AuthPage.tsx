import './AuthPage.css';
import { SignForm } from './components/signForm';

type AuthPageProps = {
}

function AuthPage(props: AuthPageProps) {
  return (
    <div className="AuthPage">
      <SignForm />
    </div>
  );
}

export default AuthPage;