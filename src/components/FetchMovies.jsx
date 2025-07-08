import { useEffect, useState } from "react";
export default function FetchMovies(){
    const[movies,setMovies]=useState([]);
    // useEffect(()=>{
    //     const fetchApi=async()=>{
    //         const data=await fetch('https://imdb.iamidiotareyoutoo.com/search?q=Spiderman')
    //         const res=await data.json()
    //         setMovies(res.description);
    //     }
    //     fetchApi()
    // },[])

    useEffect(()=>{
        fetch("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman")
        .then(res=>res.json())
        .then((data)=>setMovies(data.description))
        
        .catch((err)=>console.log(err)) //error handling in fetch dat
    },[])
    return(
        <div>
            <ul>  

                {movies.map((mov)=>(
                    <li>{mov['#TITLE']}</li>

                ))}
            {/* {movies.map((movie) => (
                <li key={movie["#IMDB_ID"]}>
                    <h3>{movie["#TITLE"]} ({movie["#YEAR"]})</h3>
                    <p>Actors: {movie["#ACTORS"]}</p>
                    <a href={movie["#IMDB_URL"]} target="_blank" rel="noreferrer">IMDb Link</a>
                    <br />
                    <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} width="150" />
                </li>
            ))} */}
            </ul>
        </div>
    );
}