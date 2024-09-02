import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './home/HomePage'
import { Footer } from './components/footer/Footer'
import { SinglePage } from './components/watch/SinglePage'

function App() {

  return (
    <>
      <Router>
        <Header/>
         <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/singlePage/:id' component={SinglePage}/>
         </Switch>
         <Footer/>
      </Router>
      
    </>
  )
}

export default App
