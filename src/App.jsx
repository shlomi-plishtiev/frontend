
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import './assets/styles/main.scss'
import { HomePage } from './pages/HomePage'
import { UserMsg } from './cmps/UserMsg'

function App() {

  return (
    <div className='main-container'>
      <UserMsg />
      <AppHeader />
      <HomePage />
      <AppFooter />
    </div>
  )
}

export default App
