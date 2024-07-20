import { useState } from "react";

export default function Card( { handleClick, hero} ) {

    return (

        <div className="hero" onClick={handleClick} key={hero.key} >
            <img src={hero.portrait} alt={hero.key} />
        </div>

    )

}