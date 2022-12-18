
import './App.css'
import QuoteBox from './components/QuoteBox';

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

 
  



  return (

    <div className="App">

<QuoteBox />

    
    </div>
  )
}

export default App
