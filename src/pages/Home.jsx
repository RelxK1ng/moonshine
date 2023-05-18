import Contents from '../components/Contents'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
const Home = () => {
  return (
    <main>
      <Header />
      <Contents />
      <ToastContainer />
    </main>
  )
}
export default Home
