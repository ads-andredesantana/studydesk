import './normalize.css'
import './App.css'
import { CardPreview } from './components/CardPreview'
import { useEffect, useState } from 'react'

function App() {
  const [cards, setCards] = useState([])

    useEffect(() => {
      fetch('/api/card')
      .then(res => res.json())
      .then(setCards)
    }, [])

  return (
    <div>
      <header>
        <h1>
          Study<span className='titleHighlight'>Deck</span>
        </h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className='gridContainer'>
          {cards.map(({id, definition, term}) => (
            <CardPreview 
              key={id} 
              definition={definition} 
              term={term}/>                    
          ))}

        </div>
      </main>
    </div>
  )
}

export default App
