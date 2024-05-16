import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import { Link } from 'react-router-dom'
function home (){
   
   return(
    <>
    <div className='h-screen w-screen bg-slate-100 px-28'>
    <div className='flex'>
        <div className=' flex flex-col gap-9 py-72 px-60'>
        <h1 className="font-bold text-6xl font-serif">Boas vindos ao <span className="">GALLERY</span></h1>
        <p className='text-slate-800 text-xl font-serif'>Adicione, veja e reveja seus preciosos momentos registrados aqui,<br /> enriquecendo sua vida com lembranças que ganham valor a cada revisitada.</p>
        <div className='flex flex-col bg-slate-300 hover:bg-slate-500 w-36 py-2 hover:font-bold text-center'>
            <Link to="/get"><button>Minhas Fotos</button></Link>
        </div>
        </div>  
        <div className='flex flex-col  my-28 gap-10 px-28'>
            <div className='pr-7 w-96'><img src={Img1} alt="img1"/></div>
            <div className='pl-7 w-96'><img src={Img2} alt="img2" /></div>
            <div className='pr-7 w-96'><img src={Img3} alt="img3" /> </div>         
                    
        </div>
    </div>
    </div>
    
    </>
   )
}
export default home

//h-screen w-screen bg-slate-100 font-serif flex
//<h1 className="font-bold text-6xl px-20 ">Boas vindas ao <span className="">GALLERY</span></h1>
// <p className='text-slate-800'>Adicione, veja e reveja seus preciosos momentos registrados aqui,<br /> enriquecendo sua vida com lembranças que ganham valor a cada revisitada.</p>