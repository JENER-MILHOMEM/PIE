import { Link } from "react-router-dom"
function navbar (){
    return (
      <>
        <div className="flex px-16 py-6 text-center justify-between justify-around bg-white font-serif">
          <div className="text-black text-2xl px-3 py-3">
            <Link to="/">
              <span className="font-serif font-bold">GALLERY</span>
            </Link>
          </div>
          <div className="flex gap-10 text-black text-2xl">
            <div className="font-serif font-bold hover:text-black px-3 py-3 rounded-sm">
              <Link to="/criadores">Criadores</Link>
            </div>
            <div className="font-serif font-bold hover:text-black px-4 py-3 rounded-sm">
              <Link to="/post">Poste Fotos</Link>
            </div>
            <div className=" font-serif font-bold hover:text-black px-4 py-3 rounded-sm">
              <Link to="/get">
                <span className="font-serif font-bold">Minhas Fotos</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
export default navbar