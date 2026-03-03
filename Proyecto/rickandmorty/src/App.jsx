import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeP from './components/Pages/Home/HomeP';
import CharacterP from './components/Pages/CharacterPages/CharacterP';
import NotFounP from "./components/Pages/NotFount/NotFounP";
import Creador from "./components/Pages/Creador/Creador";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomeP/>}/>
          <Route path='/Personajes' element={<CharacterP/>}/>
          <Route path='/Creador' element={<Creador/>}/>
          <Route path='/*' element={<NotFounP/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
