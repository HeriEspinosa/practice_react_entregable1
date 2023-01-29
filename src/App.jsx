import { useState } from 'react'
import './App.css'
import QuoteBox from './Components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  console.log(colors);
  const randomElement = arr => {
  const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
}

const [quoteRandom, setQuoteRandom] = useState(randomElement(quotes))
const [colorRandom, setColorRandom] = useState(randomElement(colors))

const handleClick = ()=> {
  setQuoteRandom(randomElement(quotes))
  setColorRandom(randomElement(colors))
}

  return (
    <div style={{backgroundColor:colorRandom}} className="App">
      <QuoteBox
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
      <div className='hr__code'>
        <a href="https://github.com/HeriEspinosa/repo_react_entregable1.git"><p>Hecha un Vistazo a mi Codigo <span>Aqui</span></p></a>
      </div>
    </div>
    
  )
}

export default App
