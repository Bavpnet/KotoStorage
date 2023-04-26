import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import { About } from './routes/About'
import { Upload } from './routes/Upload'
import { Gallery } from './routes/Gallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/upload',
        element: <Upload />
      },
      {
        path: '/gallery',
        element: <Gallery />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
