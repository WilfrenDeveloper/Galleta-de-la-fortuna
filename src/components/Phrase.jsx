
const Phrase = ({phraseRandom}) => {


  return (
    <article className="div__article">
        <p className="div__p">{phraseRandom['phrase']}</p>
        <img className="div__img--rectangle" src="/src/assets/images/rectangle1.svg" alt="rectangle"/>
    </article>
    
  )
}

export default Phrase