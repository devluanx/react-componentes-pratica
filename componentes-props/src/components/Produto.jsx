function Produto(props, disponivel){
    return(
<>
<h1>Nome: {props.nome}</h1>
<h2>Descrição:{props.descricao}</h2>
<h3>Valor:{props.valor}</h3>
<p>
{disponivel ? "Disponível : Indisponível"}

</p>
<button>Comprar</button>


</>

    )
}

export default Produto;