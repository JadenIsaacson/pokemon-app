"use client"
import React, {useState, useEffect} from "react";
import Card from "./Card";

const Pokemon = () => {
    const [pokemon1, setPokemon1] = useState()
    const [pokemon2, setPokemon2] = useState()
    const [user1, setUser1] = useState('Player 1')
    const [user2, setUser2] = useState('Player 2')
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        if(pokemon1?.stats?.[0]?.base_stat === pokemon2?.stats?.[0]?.base_stat) {
            setWinner('DRAW')
        } else if(pokemon1?.stats?.[0]?.base_stat > pokemon2?.stats?.[0]?.base_stat) {
            setWinner(`${user1} wins!`)
        } else {
            setWinner(`${user2} wins!`)
        }
    }, [pokemon1, pokemon2, user1, user2])

    const handleRandom = () => {
        let randomNumber1 = Math.floor(Math.random(1, 2000) * 100)+1

        let randomNumber2 = Math.floor(Math.random(1, 2000) * 100)+1

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber1}`)
        .then((res) => res.json())
        .then((data) => {
        setPokemon1(data)
        })
        .catch((error) => {
            console.log(error.message)
        })
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber2}`)
        .then((res) => res.json())
        .then((data) => {
        setPokemon2(data)
        })
        .catch((error) => {
            console.log(error.message)
        })

    }
    const handleUser1Change = (e) => {
        setUser1(e.target.value)
    }

    const handleUser2Change = (e) => {
        setUser2(e.target.value)
    }
    let isWinner = winner && pokemon1?.stats?.[0]?.base_stat !== undefined
    return (
        <div>
        <div className="container">
        <input onChange={handleUser1Change} value={user1} />
        {pokemon1 && <Card pokemon={pokemon1}/>}
        <button className="fight" onClick={handleRandom}>FIGHT!</button>
        {pokemon2 && <Card pokemon={pokemon2}/>}
        <input onChange={handleUser2Change} value={user2} />
        </div>
        {isWinner && <h1 className="winner">{winner}</h1>}
        </div>
    )
}

export default Pokemon