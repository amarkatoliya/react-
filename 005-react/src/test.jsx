import { useEffect, useState } from "react";

export function ChaiInfo(){

    const [iteam,setIteam] = useState([])

    return(
        <div>
            <h2>{"message"=iteam}</h2>
            <ul>
                <li>
                    {setIteam(menu.iteam)}
                </li>
            </ul>
        </div>
    )
}