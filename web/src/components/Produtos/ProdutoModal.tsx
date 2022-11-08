import * as Dialog from '@radix-ui/react-dialog'

interface ProdutoProps{
    fotoUrl: string;
    nome: string;
    valor: number;
}

export function ProdutoModal(props: ProdutoProps){
    return(
        <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[1000px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>{props.nome}</Dialog.Title>
        </Dialog.Content>
</Dialog.Portal>
)}