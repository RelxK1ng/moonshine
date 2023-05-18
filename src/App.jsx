import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Notfond from './pages/Notfond'
function App() {
  const routeElement = useRoutes([
    { path: 'login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
    { path: 'home', element: <Home /> },
    { path: '/*', element: <Notfond /> }
  ])
  return routeElement
}
export default App
