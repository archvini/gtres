
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import Home from './pages/Home';
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
    <Header 
    brand="Geração Tech"
    description="Sede Bezerra">

      <a href="/#equipe">Equipe</a>
      <NavLink to="/contato">Contato</NavLink>

    </Header>
    <main className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Contact/>}/>
         <Route path='/contato' element={<Contact/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}
     
export default App;
