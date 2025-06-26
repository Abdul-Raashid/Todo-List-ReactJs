import { useEffect, useState } from "react";

export default function Movie(){
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        const fetchMovies=async()=>{
      const data=await fetch('https://jsonplaceholder.typicode.com/posts');
      const res=await data.json();
   
      console.log(res);
      setMovie(res);
        }

        fetchMovies();
    },[])
    

    return(
        <div>
            <ul>
               {movie.map((m)=>(
                <li key={m.id}>
                    <p>{m.userId} {m.id}</p>
                    <p>{m.title}  {m.body}</p>
                </li>
               ))}
            </ul>
        </div>
    )
}