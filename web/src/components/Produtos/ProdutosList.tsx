import { useState, useEffect } from 'react';

import axios from "axios"

interface PedidoProps{
    id: string;
}
interface ProdutoProps{
    nome: string;
    fotoUrl: string;
    valor: number;
}

export function ProdutoList(props: ProdutoProps){
    
    return(
        <li className="px-6 py-2 border-b border-gray-200 w-full">
           {props.nome}
        </li>
    )
}