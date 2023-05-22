import React from 'react'

const Card = (props) => {
    return (
        <div>
            <img src={props.img} alt="" />
            <h1 className="title">{props.titulo}</h1>
            <h3> Descripción:</h3>
            <p>{props.description}</p>
         
        </div>
    )
}

export default Card