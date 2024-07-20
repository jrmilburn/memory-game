import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Game.css'

import Card from "./Card";

export default function Game() {

    const [heroes, setHeroes] = useState([]);
    const [selectedHeroes, setSelectedHeroes] = useState([]);
  
    //fetch data from overwatch api
    useEffect(() => {
      axios.get('https://overfast-api.tekrop.fr/heroes')
        .then(res => {
          const updatedHeroes = res.data.map(hero => ({
            ...hero,
            isClicked: false
          }));
          setHeroes(updatedHeroes);
          setSelectedHeroes(getRandomHeroes(updatedHeroes, 3)); // Update selectedHeroes after fetching data
        })
        .catch(err => console.log(err));
    }, []);
  
    const getRandomHeroes = (arr, num) => {
      // Create a copy of the array and sort it to avoid mutating the original array
      return [...arr].sort(() => 0.5 - Math.random()).slice(0, num);
    }
  
    const handleClick = (e) => {
      const heroAlt = e.target.getAttribute('alt');
      const updatedHeroes = heroes.map(hero => {
        if (hero.alt === heroAlt) {
          return { ...hero, isClicked: true };
        }
        return hero;
      });
  
      setHeroes(updatedHeroes);
      setSelectedHeroes(getRandomHeroes(updatedHeroes, 3));
    }
    

    return (

        <div className="game-screen">

            <h2>Overwatch Memory Game</h2>
            <div className="game-grid">
                {selectedHeroes.map(hero => (
 
                    <Card 
                        handleClick={handleClick}
                        hero={hero}/>

                ))}
            </div>

        </div>

    )

} 