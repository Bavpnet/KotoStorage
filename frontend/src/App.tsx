import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    // <p>{window._env_.API_URL}</p>

    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
