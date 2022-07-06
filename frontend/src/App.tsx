import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import ListPage from './pages/ListPage/ListPage';
import { myStore } from './store/myStore';
import { observer } from 'mobx-react-lite';

// const mockUser = {
//   id: 1,
//   login: 'User'
// }

function App() {
  console.log(myStore.userData)

  if(!myStore.userData) return <AuthPage />
  else return <ListPage />
}

export default observer(App);
