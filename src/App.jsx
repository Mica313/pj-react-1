import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import Repos_list from "./components/repos_list";
function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [nomeusuario, setNome] = useState('');
  return (
    <>
      <input type="text" onBlur={(e) => setNome(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario="Mica313"/>
          <Repos_list nomeUsuario="Mica313"/>
        </>
      )
        
      }
      {formularioVisivel && <Formulario/>}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </>
  )
}
export default App
