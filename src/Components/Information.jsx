import React from 'react'

const Information = ({quoteRandom}) => {
    return (
        <div className="information">
            <i className='bx bxs-quote-left box__icon'></i>
            <p className="card__phrase">{quoteRandom.quote}</p>
            <p className="card__author"><b>{quoteRandom.author}</b></p>
        </div>
    )
}

export default Information