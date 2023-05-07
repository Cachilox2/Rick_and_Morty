import "./App.scss";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios"
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions/action";
import NotFound from './components/NotFound/NotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();

  const showNav = location.pathname !== "/";

  const login = async (userData) => {
    try {
      const {email, password} = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(`${URL}?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data)
      access && navigate("/home")
    } catch (error) {
      throw Error("Error al iniciar sesión")
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");

  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

      if(!data) {
        throw new Error("Error al obtener los datos del personaje")
      }
  
      if (data.name) {
        if(!characters[id]) {
          setCharacters((oldChars) => ({ ...oldChars, [id]: data }))
        }else {
          window.alert("¡Ya hay un personaje con este ID!");
        }
      }else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      window.alert("¡Ocurrió un error al obtener los datos del personaje!");
    }
  };

  const randomChar = () => {
    let random = Math.floor(Math.random() * 826) + 1;

    onSearch(random)
  }

  const onClose = (id) => {
    dispatch(removeFav(id))
    let character = Object.values(characters);
    const filter = character.filter((character) => {
      return character.id !== id;
    });
    setCharacters(filter);
  };

  return (
    <div className="App">
      {showNav && <Nav logOut={logOut} onSearch={onSearch} randomChar={randomChar} />}

      <main>
        <Routes>
          <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />

          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Form login={login} />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;
