import "./App.scss";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
// import axios from "axios";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { URL_BASE, API_KEY } from "./key";

// import NotFound from './components/NotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const EMAIL = "pedro@gmail.com";
  const PASSWORD = "hola123";

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

  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access, navigate]);

  //  `${URL_BASE}/${id}?key=${API_KEY}`


  const onSearch = (id) => {
    fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {

        const charactersFiltered = characters.filter(
          (character) => character.id === id
        );

        if (data.name) {
          if (!charactersFiltered.length) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Ya hay un personaje con este ID!");
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
    });
  };

 
  const onClose = (id) => {
    const filter = characters.filter((character) => {
      return character.id !== id;
    });
    setCharacters(filter);
  };

  return (
    <div className="App">
      {showNav && <Nav logOut={logOut} onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={
            <div className="cardContainer container">
              <Cards onClose={onClose} characters={characters} />
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />

        {/* <Route path='*' element={<NotFound />}/> */}
      </Routes>
    </div>
  );
}

export default App;
