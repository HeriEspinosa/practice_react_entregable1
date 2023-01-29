import React from 'react'

const ButtonBox = ({handleClick, colorRandom}) => {
    return (
        <button style={{backgroundColor: colorRandom}} className="card__button" onClick={handleClick}>&#62;</button>
    )
}

export default ButtonBox