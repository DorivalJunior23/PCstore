import "./styles/main.css"
import logoImg from './assets/Logo.png'

function App() {
  return (
    <div className="max-w-[1344px] mt-0 mx-auto flex flex-col items-center my-8 ">

      <img src={logoImg} alt=""/>

    <div className='grid grid-cols-6 gap-6 mt-16'>
<a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='https://i.ibb.co/QFNSt9y/Mesa-Digitalizadora.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Mesa Digitalizadora Wacom</strong>
        <span className="text-zinc-300 text-sm block ">R$ 1.699,99</span>
      </div>
       </a>
    <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='https://i.ibb.co/gZcSRbT/Fone2.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Headset Gamer HyperX</strong>
        <span className="text-zinc-300 text-sm block ">R$ 199,99</span>
      </div>
       </a>

      

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/Mousepad.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Mousepad Gamer Havit</strong>
        <span className="text-zinc-300 text-sm block ">R$ 44,99</span>
      </div>
       </a>

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/Mouse.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Mouse Redragon Cobra</strong>
        <span className="text-zinc-300 text-sm block ">R$ 116,99</span>
      </div>
       </a>

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/Teclado.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Teclado Redragon Kumara</strong>
        <span className="text-zinc-300 text-sm block ">R$ 229,99</span>
      </div>
       </a>

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/OculosVR.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Óculos Quest 2 Headset Realidadevirtual</strong>
        <span className="text-zinc-300 text-sm block ">R$ 4.230,00</span>
      </div>
       </a>

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/Kit.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Kit Teclado e Mouse Microsoft Comfort 900</strong>
        <span className="text-zinc-300 text-sm block ">R$ 349,00</span>
      </div>
       </a>

       <a href='' className='relative rounded-lg overflow-hidden bg-[#9fbefb] pb-14'>
        <img src='/CaixaDeSom.png' alt=''/>
     
      <div className='w-full pt-16 pb-4 px-2 bg-game-gredient absolute bottom-0 left-0 right-0'>
        <strong className="font-bold text-white inline-flex">Caixa De Som Gamer, Logitech G560 7.1</strong>
        <span className="text-zinc-300 text-sm block ">R$ 2.212,29</span>
      </div>
       </a>
       
       </div>
    </div>
  )
}

export default App
