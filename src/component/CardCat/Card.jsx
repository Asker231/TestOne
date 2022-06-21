import React from 'react'
import Style from './Card.style.module.css';
import Photo from './Photo.png';



function Card({topTitle,middleTitle,subBotTitle,subBotTitleTwo,subBotTitleTree,kg,bottTitle,disc,aleaTitle}) {
  const [before,setBefore]=React.useState(true)
  const [beforeTop,setBeforeTop]=React.useState(true)
  const styled = React.useRef();
  return (
    <div   
     className={Style.card}>
        <div 
        ref={styled}
          onClick={()=>{
           setBefore(before=>!before)
           setBeforeTop(beforeTop=>!beforeTop)
          }}
         className={Style.card_content}>
            <div className={Style.title_block}>
              {
              beforeTop?<h5>{topTitle}</h5>:<p className={Style.alea}>{aleaTitle}</p>
              }
               <h3><span>Нямушка</span><br/>{middleTitle}</h3>
               <p>{subBotTitle}<br/>{subBotTitleTwo}<br/>{subBotTitleTree}</p>
            </div>          
               <img id={Style.cat} src={Photo} alt="alt" />
               <div className={Style.box}>
               <h6> {kg}<br/>кг</h6>
               </div>
        </div>
        {
        before?<h3 id={Style.title}>{bottTitle},<a  href='#'>купи.</a></h3>:<p className={Style.disc}>{disc}</p>
        }
    </div>
  )
}

export default Card