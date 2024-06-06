import { useEffect, useState } from 'react'
import './App.css'

const Base_URL = "https://jsonplaceholder.typicode.com"
const Users_URL = Base_URL + "/users";

interface Users  {
  
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }
  async function getUsers(){
    const response = await fetch (Users_URL)
    const UserData: Users [] = await response.json();
    return UserData;
  }

function App() {
  const [users, setUSers] = useState<Users[]>([])



  useEffect(() => {
    (async () => {
      const UserData = await getUsers();
      setUSers(UserData)
    })();
  },[])

  return (
    <>
        {users.map((user) => {
        <li key = {user.id}>{user.name}</li>
      })}
    </>
  )
}

export default App
