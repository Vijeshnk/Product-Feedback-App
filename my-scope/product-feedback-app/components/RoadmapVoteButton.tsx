import { Typography } from '@mui/material';
import React from 'react';
import {useState} from 'react';
import { Button } from 'react-bootstrap';

export default function RoadmapVoteButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <Button variant="contained" 
        style={{
          backgroundColor: isActive ? 'hsl(230,76%,59%)' : '',
          color: isActive ? 'hsl(0, 0%, 10%)' : '',
          height: '2.5rem',
          borderRadius: '10px',
          width: '5rem',
          
          fontFamily: 'Jost',
          border:'none'

        }}

        onClick={handleClick}
      >
        <Typography sx={{fontWeight:550,fontSize:'13.5px',position:'relative',left:'10px',top:'10px'}}>89</Typography>
        <div style={{position:'relative', right:'20px',bottom:'12px'}}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 6l4-4 4 4"
                className="svgStyle"
                stroke="#4661E6"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
      </Button>
      
    </div>
  );
}
