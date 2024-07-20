import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Game.css'

export default function Game() {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios.get('https://overfast-api.tekrop.fr/heroes')
        .then(res => { setHeroes(res.data) })
        .catch(err => console.log(err))
    }, [])

    console.log(heroes);

    const getRandomHeroes = (arr, num) => {

        return arr.sort(() => 0.5 - Math.random()).slice(0, num);

    }

    const heroList = getRandomHeroes(heroes, 3);
    

    return (

        <div className="game-screen">

            <h2>Overwatch Memory Game</h2>
            <div className="game-grid">
                {heroList.map(hero => (
                    <div className="hero">
                        <p>{hero.name}</p>
                        <img src={hero.portrait} alt={hero.key} />
                    </div>
                ))}
            </div>

        </div>

    )

} 