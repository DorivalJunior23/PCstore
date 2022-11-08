interface ProdutoProps{
    nome: string;
    fotoUrl: string;
    valor: string;
}

export function ProdutoList(props: ProdutoProps){
    
    return(
        <li className="flex justify-between px-6 py-2 border-b border-blue-700 w-full align-text-top">
           {props.nome}
           <a stroke-width="2">
           {props.valor}   
           </a>
        </li>
    )
}