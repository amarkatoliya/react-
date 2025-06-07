import {useState,useEffect} from "react";

export function App() {
    const [message,setMessage] = useState("Loading...")

    useEffect(() => {
        fetch(`/api`)
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch(() => setMessage("Failed to Load Data"))
    },[])


  return (
    <div>
      <h1> Hi There, this is my first Code with Vite in React</h1>
      <h2> {message} </h2>
    </div>
  );
};


// you have to add server.js file
