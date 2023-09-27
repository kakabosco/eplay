import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
