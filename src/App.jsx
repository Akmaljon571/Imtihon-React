import './App.scss';
import useAuth from './hooks/useAuth';
import Prive from './prive.app';
import Public from './public.app';


function App() {
    const { token } = useAuth
    console.log(token);
    if (token) {
      return <Prive /> 
    } else {
      return <Public />
    }
}

export default App;
