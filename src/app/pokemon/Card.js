import react from "react";

const Card = ({pokemon}) => {
    console.log(pokemon)
    let typeArray = ['lightning', 'grass', 'fire']
    let type = typeArray?.includes(pokemon?.types?.[0]?.type?.name) ? pokemon?.types?.[0]?.type?.name : 'none'
    return (<div className={`card-container ${type}`}>
        <img src={pokemon?.sprites?.front_default} />
        <div className="info-container">
        <div className="name">{pokemon?.name}</div>
        <div className="hp">HP: {pokemon?.stats?.[0]?.
        base_stat}</div>
        </div>
    </div>
    )
}

export default Card