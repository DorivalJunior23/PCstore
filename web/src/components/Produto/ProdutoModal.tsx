import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlinePlus } from 'react-icons/ai';

interface ProdutoProps{
    fotoUrl: string;
    nome: string;
    descricao: string;
    valor: number;
}

export function ProdutoModal(props: ProdutoProps){
    return(
        <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[1000px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>{props.nome}</Dialog.Title>
        <ul className='rounded-lg  border-4 border-blue-700 mt-2'>
        <li className="flex justify-between px-6 py-2 w-full align-text-top">
          {props.descricao}
          </li>
          </ul>
          <div className='pt-1 mt-8 flex justify-between rounded-lg overflow-hidden'>
          <a className='py-3 px-4 bg-blue-700 place-self-start text-white rounded flex items-center gap-3'>
            {props.valor}
          </a>
        <Dialog.Trigger className='py-3 px-4 bg-blue-700 place-self-end text-white rounded flex items-center gap-3'>
        <AiOutlinePlus size={22}/>
        Adicionar ao carrinho
        </Dialog.Trigger>
        </div>

        </Dialog.Content>
</Dialog.Portal>
)}