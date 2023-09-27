import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles'
import Router from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
