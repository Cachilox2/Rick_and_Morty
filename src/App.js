import "./App.scss";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { URL_BASE, API_KEY } from "./key";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/action";
import NotFound from './components/NotFound/NotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const EMAIL = "pedro@gmail.com";
  const PASSWORD = "hola123";

  const dispatch = useDispatch();
  const location = useLocation();

  const showNav = location.pathname !== "/";

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");

  }, [access, navigate]);

  const onSearch = (id) => {
    fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los datos del personaje");
        }
        return res.json();
      })
      .then((data) => {
        if (data.name) {
          if (!characters[id]) {
            setCharacters((oldChars) => ({ ...oldChars, [id]: data }));
          } else {
            window.alert("¡Ya hay un personaje con este ID!");
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error(error);
        window.alert("¡Ocurrió un error al obtener los datos del personaje!");
      });
  };

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
      {showNav && <Nav logOut={logOut} onSearch={onSearch} />}

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
