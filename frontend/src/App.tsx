import { myStore } from './store/myStore';
import { observer } from 'mobx-react-lite';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import ListPage from './pages/ListPage/ListPage';


function App() {
  if(!myStore.userData) return <AuthPage />
  else return <ListPage />
}

export default observer(App);
