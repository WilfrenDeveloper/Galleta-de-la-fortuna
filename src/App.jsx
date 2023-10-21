import {useState} from "react"
import getRandomFromArr from "./services/getRandomFromArr.js"
import phrases from "./utils/phrases.json"
import Phrase from "./components/Phrase.jsx"
import ButtonPhrase from "./components/ButtonPhrase.jsx"
import imageFondo from "../src/utils/images.json"
import ImagesFondo from "./components/ImagesFondo.jsx"
import "./components/style.css"
function App() {

  let quote = getRandomFromArr(phrases)

  const [phraseRandom, setPhraseRandom] = useState(quote)

  let images = getRandomFromArr(imageFondo)

  const [image, setImage] = useState(images)
  

  return (
    <>
      <h1 className="div__h1">GALLETAS DE LA FORTUNA</h1>
      <Phrase
        phraseRandom = {phraseRandom}
      />
      <ButtonPhrase
        setPhraseRandom = {setPhraseRandom}
        setImage = {setImage}
      />
      <ImagesFondo
        img = {image}
      />
    </>
  )
}

export default App
