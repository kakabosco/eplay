import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Router from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
