import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import Repos_list from "./components/repos_list";
function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Micael Almeida" endereco="https://github.com/Mica313.png"/>
      <Repos_list/>
      {formularioVisivel && <Formulario/>}
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button>
    </>
  )
}
export default App
