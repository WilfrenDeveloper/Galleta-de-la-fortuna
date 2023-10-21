import getRandomFromArr from "../services/getRandomFromArr.js"
import phrases from '../utils/phrases.json'
import imageFondo from "../../src/utils/images.json"

const ButtonPhrase = ({setPhraseRandom, setImage}) => {

    const handleChangePhrase = () =>{
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)

        const img = getRandomFromArr(imageFondo)
      setImage(img)
    }

  return (
    <button onClick={handleChangePhrase} className="div__button">Abrir otra galletica</button>
  )
}

export default ButtonPhrase