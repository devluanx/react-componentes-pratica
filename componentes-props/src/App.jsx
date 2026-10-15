import Titulo from "./components/Titulo";
import './App.css'
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from "./components/Produto";

function App(){

  return(

    <>
    <Titulo/>
    <Aluno nome="Luan" turma="DESI 2026"/>
    <Aluno nome="Yago" turma="DESI 2025"/>
    <Aluno nome= "Jackson" turma="DESI 2026"/>
    <Nota disciplina="React" nota={8.5}/>

    <Produto
    nome="Teclado mecânico"
    descricao="Teclado com iluminação RGB"
    valor={250.00}
    disponivel={true}/>
    
    <Produto 

    nome="Mouse RGB"
    descricao="Mouse RGB leve"
    valor={100}
    disponivel={false}/>
    
    <Produto
    nome="Monitor 120HZ"
    descricao="Monitor 120HZ curvo"
    valor={1000}
    disponivel={false}/>

<Produto
nome="MousePad darksouls"
descricao="MousePad do jogo Darksouls"
valor={50}
disponivel={true}/>
    </>
  )
}
export default App;

