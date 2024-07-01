import React, { useState } from "react";
import { useEffect } from "react";

function useFetchData(url:string){
    const [data, setData]  = useState<[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
            const fetchData = async () =>{
                try {
                    setLoading(true);
                    const response =  await fetch(url)
                    const user = await response.json();
                    setData(user);
                    setLoading(false);
                }
                catch (error) {
                    setError(error)
                }
                
            }
       
            setError(error)
        
       
    },[])

    return [data, loading, error]
}

export default useFetchData;