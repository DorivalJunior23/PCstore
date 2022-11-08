import * as Dialog from '@radix-ui/react-dialog'
interface ProdutoProps{
    fotoUrl: string;
    nome: string;
    valor: number;
}

export function ProdutoBanner(props: ProdutoProps){
    return(
      
        <Dialog.Trigger className='relative rounded-lg overflow-hidden bg-blue-700 pb-14'>
        <img src={props.fotoUrl} alt=''/>
     
      <div className='w-full pt-16 pb-5 px-2 bg-product-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">{props.nome}</strong>
        <span className="text-zinc-300 text-sm block ">{props.valor}</span>
      </div>
       </Dialog.Trigger>
    )
}


