import {useState} from 'react';
import '../styles/App.scss';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState (0);
  const [lastLetter, setLastLetter] = useState ('');
  const [word, setWord] = useState ('pepino');
  const [userLetters, setUserLetters] = useState ([]);
// nos quedamos en ejercicio 3 
  const renderSolutionLetters = ()=>{
    const wordLetters = word.split(''); // convierte el string 'word'en un array( en los elementos del array)
    return wordLetters.map ((letter,index)=>{
         if (userLetters.includes(letter)){
         /*   console.log(returnLetter);
           console.log('no está en la palabra') */
           return <li key={index} className="letter">{letter}</li>;
         }else {
         
        /*    console.log('si está en la palabra') */
        return <li key={index} className="letter"></li>;
         }
    })
  }
  const renderErrorLetters = () =>{
    const wordLetters = word.split(''); // convierte el string 'word'en un array( en los elementos del array)
    return userLetters.filter ((letter)=>{
         if (!wordLetters.includes(letter)){
         return letter;
          
         }
    }).map ((letter, index) =>{return <li key={index} className="letter">{letter}</li>;})
   
   
  }
  const handleClick = () =>{
    setNumberOfErrors (numberOfErrors +1);
  }

  const handleInputLetter = (ev) =>{
   
  
    if (/^[a-zA-Z]$/.test(ev.target.value)){
      setLastLetter(ev.target.value) ;
      userLetters.push(ev.target.value);
      setUserLetters([...userLetters]);

    }
    else{
      setLastLetter('') ;
     
    }
  }


  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
            {renderErrorLetters()}
              {/* <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li> */}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleInputLetter}
              value ={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick ={handleClick}>Incrementar</button>
      </main>
    </div>
  );
}

export default App;
