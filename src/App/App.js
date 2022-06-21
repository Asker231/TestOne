
import './App.css';
import React from 'react';
import Card from '../component/CardCat/Card';
import cardProps from '../component/CardCat/card.props.js';

function App() {
  const [props,setProps] = React.useState([]);
 
  React.useEffect(()=>{
    setProps(cardProps)
  },[])
  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <div className='cards'>
          {
            props.map((elem)=>{
              return <Card   
                       topTitle={elem.topTitle}
                       middleTitle={elem.middleTitle}
                       subBotTitle ={elem.subBotTitle}
                       subBotTitleTwo={elem.subBotTitleTwo}
                       subBotTitleTree ={elem.subBotTitleTree}
                       bottTitle = {elem.bottTitle}
                       kg={elem.kg}
                       disc={elem.disc}
                       aleaTitle={elem.aleaTitle}
                      />
            })
          }
      </div>
      
    </div>
  );
}

export default App;
