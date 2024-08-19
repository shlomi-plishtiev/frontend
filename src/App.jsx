
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import './assets/styles/main.scss'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <div className='main-container'>
      <AppHeader />
      <HomePage />
      <AppFooter />
    </div>
  )
}

export default App
