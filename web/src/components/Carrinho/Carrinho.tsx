import {AiOutlineShoppingCart} from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog'

export function Carrinho(){
    return(
        <div className='pt-1 mt-8 place-self-end rounded-lg overflow-hidden'>
        <Dialog.Trigger className='py-3 px-4 bg-blue-700 text-white rounded flex items-center gap-3'>
        <AiOutlineShoppingCart size={24}/>
        Carrinho
        </Dialog.Trigger>
        </div>
    )
}
