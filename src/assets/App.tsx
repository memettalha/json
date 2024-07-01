import React, { useState, useEffect } from "react";
import './App.css'
import useFetchData from "../routes/useFetchData";

function App(){
    const   [data, loading, error] = useFetchData("https://jsonplaceholder.typicode.com/users/")
    if(loading) return <p>Yükleniyor...</p>;
    if(error) return <p>Hata: {error}</p>
    return(
        <>
        <h2>Json Placeholder</h2>
        <ul>
            {data?.map((user:any) => (
                <li key = {user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}













const numbers = [1,2,3,4,5,6,7,8,9]



function LifeCycle(){
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        console.log("Component render edildi Mount oldu")
    })
    useEffect(() => {
        console.log("Component güncellendi rerender")
    })
    useEffect(() => {
        return () => {
            console.log("Component unmount oldu")
        }
    })
    return(
        <div>
            Sayaç : {counter}
            <button onClick={() => setCounter(oldCounter => oldCounter+1)}></button>
            















            <ul>
              {numbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
        </div>
    )
}