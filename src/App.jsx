
import './App.css'
import Greetings from './components/Greetings'
import { Header } from './components/Header'

const user = window.prompt("Qual o seu nome?") || "Visitante";

function App() {

  return (
    <>  
    <Header/>
    <Greetings nome={user}/>
    <h6>isso funciona?</h6>
    </>
  )
}
     
export default App
