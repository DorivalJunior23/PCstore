import * as Dialog from '@radix-ui/react-dialog'
import { useState, useEffect } from 'react';

import { ProdutoList } from '../Produto/ProdutosList';
import { converterIntEmReais } from '../../utils/ConverterIntEmReais';


import axios from "axios"



interface Produto{
    id: string;
    nome: string;
    descricao: string;
    fotoUrl: string;
    valor: number;
}
  
export function CarrinhoModal() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    var valorTotal = 0

    useEffect(()=>{
      axios.get('http://localhost:3333/pedidos/82b905b9-f154-439d-aeb2-4af28a37b4b8/produtos')
      .then(response => {
        setProdutos(response.data)
      })
      })
      return(
        <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[1000px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Produtos no Carrinho</Dialog.Title>

    <ul className='rounded-lg border-4 border-blue-700 mt-2'>
    {produtos.map(produto =>{
      valorTotal += produto.valor
      return(
        <ProdutoList
        key={produto.id}
        nome={produto.nome}
        fotoUrl={produto.fotoUrl}
        valor={converterIntEmReais(produto.valor)}
        />
      )
    })}
    
    </ul>
<div className='pt-1 mt-8 rounded-lg overflow-hidden'>
        <Dialog.Trigger className='py-3 px-4 bg-blue-700 text-white rounded flex items-center gap-3'>
        {converterIntEmReais(valorTotal)}
        </Dialog.Trigger>
        </div>
        </Dialog.Content>
        </Dialog.Portal>
      )
}