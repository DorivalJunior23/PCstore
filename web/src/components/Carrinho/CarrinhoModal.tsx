import * as Dialog from '@radix-ui/react-dialog'
import { useState, useEffect } from 'react';

import { ProdutoList } from '../Produtos/ProdutosList';


import axios from "axios"


interface Pedido{
    id:string;
}
interface Produto{
    id: string;
    nome: string;
    descricao: string;
    fotoUrl: string;
    valor: number;
}
  
export function CarrinhoModal() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [pedidos, setPedidos] = useState<Pedido[]>([])

    useEffect(()=>{
      axios('http://localhost:3333/pedidos/82b905b9-f154-439d-aeb2-4af28a37b4b8/produtos')
      .then(response =>{
            setPedidos(response.data)
      })
      })

      useEffect(()=>{
        axios(`http://localhost:3333/produtos`)
        .then(response =>{
          setProdutos(response.data)
        })
        })
      return(
        <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[1000px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Produtos no Carrinho</Dialog.Title>

    <ul className='rounded-lg border mt-2'>
    {produtos.map(produto =>{
      return(
        <ProdutoList
        key={produto.id}
        nome={produto.nome}
        fotoUrl={produto.fotoUrl}
        valor={produto.valor}
        />
      )
    })}
    </ul>
        </Dialog.Content>
        </Dialog.Portal>
      )
}