import { Link } from "react-router-dom"
import Game from '../components/Game'
import { useState, useEffect } from 'react';

export default function Home() {
    const [userHand, setUserHand] = useState("")
     function handleDataFromChild(data) {
         setUserHand(data);
    }

    useEffect(() => {
        console.log(userHand)
    }, [userHand])

    return (
        <div className="home-container">
            <Game userHand={handleDataFromChild} />
        </div>
    )
}