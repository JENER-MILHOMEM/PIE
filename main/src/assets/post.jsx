import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/post",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setPost(data);
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen w-screen bg-slate-100">
        {post.length === 0 ? (
          <div className="flex flex-col place-items-center py-60 gap-5">
            <h1 className="text-xl font-serif font-bold">
              Você Ainda Não Fez Nenhuma Postagem
            </h1>
            <div className="flex flex-col bg-slate-300 hover:bg-slate-500 w-36 py-2 hover:font-bold text-center">
              <Link to="/post">
                <button>Faça posts aqui</button>
              </Link>
            </div>
          </div>
        ) : (
          post.map((posts) => (
            <div className="flex flex-col text-center place-items-center">
              <h1 className="text-center">esta aqui o post</h1>
              <h2>{posts.comentario}</h2>
              <div className="w-52">
                <img src={posts.img} alt="img" />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default post;