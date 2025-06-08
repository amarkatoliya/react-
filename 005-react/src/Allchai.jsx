import { useEffect, useState } from "react";

export function chaiMenu() {
    const [chai,setChai] = useState([]);
    const [error,setError] = useState("");

    useEffect(() => {
        fetch("/api/all-chai")
        .then(res => res.json())
        .then((data) => setChai(data))
        .catch(err => setError(err.message))
    },[])

    return(
        <div>
            <h1>Chai info list:</h1>
            <ul>
                {menu.map((chai) => (
                    <li key={chai._id}>{chai.name}</li>
                ))}
            </ul>
        </div>
    )
}