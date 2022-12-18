
import './App.css'

import quotes from "./quote.json";



function App() {

  const colors = [ 
    "olive", 
    "darkgreen", 
    "darkred", 
    "darkblue", 
    "teal", 
    "orangered", 
    "darkmagenta", 
    "darkorange",
    "gray" 
  ] 

 
  const random = Math.floor(Math.random() * quotes.length )
//const index = 2;
const [index, setIndex] = useState(random)

const changeUser = () => {
  setIndex(random);
}

    
  document.body.style = ` background: ${colors[random]} `
  
  


  return (

    <div className="App">


      <div className="quote_box">
        <div className="content_q">
          <span className="quote_symbol" style={{ color: "colors[random]" }} > <i className="fa-sharp fa-solid fa-quote-left"></i> </span>

          <h2 style={{ color: colors[random] }} > {quotes[index].quote} </h2>
        </div>
        <h3 style={{ color: colors[random] }} > - {quotes[index].author} </h3>
        <div className="content_button">
          <button className="button" style={{ background: colors[random] }} onClick={changeUser} ><i className="fa-solid fa-left-right"></i></button>
        </div>
        {/* <div className="linea" style={{background: background1[index]}} >  </div> */}

      </div>

      {/* <QuoteBox 
            colorRan={colors[randomColor]} 
            title2="Sobremi" 
            />  ; */}


    </div>
  )
}

export default App
