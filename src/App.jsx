import './App.css'
import { Home } from "./routes/home"
import { FormUserInfo } from './routes/formUserInfo'
import { Survey } from './routes/survey'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Result } from './routes/result'
import { Dashboard } from './routes/(painel)/dashboard'
import { Login } from './routes/(painel)/login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/formulario',
    element: <FormUserInfo />,
  },
  {
    path: '/questionario',
    element: <Survey />
  },
  {
    path: '/resultado',
    element: <Result />
  },
  {
    path: '/painel/login',
    element: <Login />
  },
  {
    path: '/painel/dashboard',
    element: <Dashboard />
  },
])

function App() {;

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer className="text-sm"/>
    </>
  )
}

export default App
