import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import './App.css'
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail';
import Form from './components/Form'

function App () {
  const location = useLocation()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([]);
  const [acces, setAcces] = useState(false)
  const username = 'gusti@henry.com'
  const password = 'gusti1234'

  function login(userData) {
    if(userData.username === username && userData.password === password) {
      setAcces(true)
      navigate('/home')
    }
    else {
      alert('usuario o contraseña incorrecta')
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
        console.log(data)
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
 }

useEffect(() => {
  !acces && navigate('/');
}, [acces]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
    
      <Routes>
        <Route path='/' element={<Form login={login}/>}></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>

    </div>
  );
}

export default App
