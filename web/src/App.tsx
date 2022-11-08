import { useState, useEffect } from 'react';
import "./styles/main.css"
import logoImg from './assets/Logo.png'
import * as Dialog from '@radix-ui/react-dialog'

import { Carrinho } from "./components/Carrinho/Carrinho"
import {ProdutoBanner} from "./components/Produtos/ProdutoBanner"
import { ProdutoModal } from './components/Produtos/ProdutoModal';
import { CarrinhoModal } from './components/Carrinho/CarrinhoModal';

import axios from "axios"

interface Produto{
  id: string;
  nome: string;
  descricao: string;
  fotoUrl: string;
  valor: number;
}


function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(()=>{
    axios('http://localhost:3333/produtos')
    .then(response =>{
      setProdutos(response.data)
    })
    })
  
 
 
  return (
    <div>
       
      <div className="max-w-[1344px] mt-0 mx-auto flex flex-col items-center my-8 ">
     
      <img src={logoImg} alt=""/>
      <Dialog.Root>
      <Carrinho/>
      <CarrinhoModal/>
      </Dialog.Root>

    <div className='grid grid-cols-6 gap-6 mt-16'>
    {produtos.map(produto =>{
      return(
        <Dialog.Root>
        <ProdutoBanner
        key={produto.id}
        fotoUrl={produto.fotoUrl}
        nome={produto.nome}
        valor={produto.valor}
        />
        <ProdutoModal
        key={produto.id}
        fotoUrl={produto.fotoUrl}
        nome={produto.nome}
        valor={produto.valor}
        />
        </Dialog.Root>
      )
    })}
       
       </div>
    </div>
    </div>
  )
}

export default App
