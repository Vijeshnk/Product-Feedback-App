import React, { useState } from "react";
import { Button } from "react-bootstrap";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ToggleButton() {

    const [state, setState] = useState(true);
    const [counter, setCounter] = useState(75);
    
    function toggle() {
    
    setState(!state);
    if (state === true) {
      setCounter(counter +1);
    
    } else {
      setCounter(counter -1);
    
    }
    }
    return (
        
        
    <Button style={{height:'2.3rem'}}
    onClick={toggle} id="clicks" >

         {state ? <span>☆</span> : <span>🌟 </span>}
         <KeyboardArrowUpIcon sx={{color:'blue'}}/>  
      {counter} 
     </Button>
    
     
    );
    }