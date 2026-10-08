import Titulo from "./components/Titulo";
import './App.css'
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";

function App(){

  return(

    <>
    <Titulo/>
    <Aluno nome="Luan" turma="DESI 2026"/>
    <Aluno nome="Yago" turma="DESI 2025"/>
    <Aluno nome= "Jackson" turma="DESI 2026"/>
    <Nota disciplina="React" nota={8.5}/>
    </>
  )
}
export default App;

