import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPONT_RANDOM = 'https://catfact.ninja/fact';
// const CAT_ENDPONT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50%color=red&json=true`;

function App() {
  // const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const [fact, setFact] = useState()

  useEffect(() => {
    console.log('Entro en el useEffect')

    fetch(CAT_ENDPONT_RANDOM)
    // Primero hacemos la llamada y devuelve la promesa
    .then(respuestaPromesa => respuestaPromesa.json())
    // Y después, recuperamos los datos de esa promesa
    .then(respuestaAPI => {
      const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningún hecho';
      //console.log(hechoRandom);

      return setFact(hechoRandom)
    })
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      {
        /* Renderizado condicional en base al valor de fact */
      }
      {
        fact && <p>{fact}</p>
      }
      
    </>
  )
}

export default App