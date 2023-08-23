import react from "react";

const Card = ({pokemon}) => {
    return (<div>
        <div>{pokemon?.name}</div>
        <div>HP: {pokemon?.stats?.[0]?.base_stat}</div>
    </div>
    )
}

export default Card