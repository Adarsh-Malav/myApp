import React ,{useState} from 'react';


export default function TextForm(props) {
   
    
    
  

    const [text,setText]=useState('enter text here');
    return (
    <>
       

       <div className="container1" style={{color:props.mode=== 'dark'?'white': '#042743' }}>
       
        <div className="text">
          <h1 >Hi</h1>
          <h1>I Am Adarsh Malav</h1>
          <h1>Associate-Software Engineer</h1>
      </div>
    </div>
  
      

      
  </>
  )
}
