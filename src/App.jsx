import './App.scss';
import useAuth from './hooks/useAuth';
import Prive from './prive.app';
import Public from './public.app';
import 'antd/dist/antd.css'


function App() {
    let { auth } = useAuth()
    if (auth) {
      return <Prive /> 
    } else {
      return <Public />
    }
}

export default App;
