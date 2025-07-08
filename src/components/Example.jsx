


function Example(){


    const data=["Raghu", "Ravi","Ramesh","Rambabu"];

    return(

        <>

        <h1>{data}</h1>

<ul>
    {data.map((m)=>(
        <li>{m}</li>
    ))}
</ul>
        
        </>
    )
}

export default Example;