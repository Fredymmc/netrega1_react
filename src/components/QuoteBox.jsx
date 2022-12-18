import React, { useState } from 'react';
import quotes from "../quote.json";

const QuoteBox = (  ) => {

  

      const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  // const index = 1;

  const changeUser = () => {
    const newRandom = Math.floor(Math.random() * quotes.length);
    setIndex(newRandom);
  };

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
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;

    return (
      
        <div className="quote_box">
          <div className="content_q">
            <span className="quote_symbol" style={{ color: colors[randomColor] }} > <i className="fa-sharp fa-solid fa-quote-left"></i> </span>
            
            <h2 style={{ color: colors[randomColor] }} > {quotes[index].quote} </h2>
            </div>
      <h3 style={{ color: colors[randomColor] }} > - {quotes[index].author} </h3>   
<div className="content_button">
      <button className="button"  style={{ background: colors[randomColor] }} onClick={changeUser} ><i className="fa-solid fa-left-right"></i></button>   
      </div>
      {/* <div className="linea" style={{background: background1[index]}} >  </div> */}
     
        </div>


       
    );
};

export default QuoteBox;