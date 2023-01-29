import React from 'react'
import ButtonBox from './ButtonBox'
import Information from './Information'

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {


    return (
        <section className="cards">
            <article style={{color: colorRandom}} className="card">
                <Information quoteRandom={quoteRandom}/>
                <ButtonBox 
                    handleClick={handleClick}
                    colorRandom={colorRandom}
                />
            </article>
        </section>
    )
}

export default QuoteBox