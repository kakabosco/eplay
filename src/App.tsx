import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Router from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
