import { Route } from 'wouter';

import Header from './components/Header';
import Home from './pages/Home'
import Animes from './pages/Animes'

import './App.css';


function App() {
  
  return (
    <div className="app-container">
      <Header/>
      <section >
        <Route path="/" component={Home}/>
        <Route path="/animes/:keyword" component={Animes}/>
      </section>
    </div>
  )
}

export default App;
