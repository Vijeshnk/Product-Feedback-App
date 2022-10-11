import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
export type FeedbackboardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Feedbackboard({ children }: FeedbackboardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
      <Card
        sx={{
          ml:{xs:0,sm:5,md:0,lg:0},
          width: 260,
          mt:{xs:12,sm:3,md:12,lg:12},
          borderRadius: '10px',
          boxShadow: 'none',
        }}
      >


       {matches && 
       <>
               <CardMedia sx={{height:{sm:260}}}
          component="img"
          alt="Feedback Mentor"
          image="https://product-feedback-app.herokuapp.com/static/media/background-header.bc782ba0.png"
        />
       <Typography
          style={{
            position: 'absolute',
            color: 'white',
            top: 80,
            marginLeft: 28,
            fontSize: '1.3rem',
            fontWeight: 700,
          }}
        >
          Frontend Mentor{' '}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            color: 'hsl(231, 100%, 97%)',
            top: 110,
            marginLeft: 28,
            fontSize: '0.9rem',
          }}
        >
          Feedback Board
        </Typography>
       </> }
       {!matches && <>         <CardMedia 
          component="img"
          alt="Feedback Mentor"
          height="140"
          image="https://product-feedback-app.herokuapp.com/static/media/background-header.bc782ba0.png"
        />
        <Typography
          style={{
            position: 'absolute',
            color: 'white',
            top: 165,
            marginLeft: 28,
            fontSize: '1.3rem',
            fontWeight: 700,
          }}
        >
          Frontend Mentor{' '}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            color: 'hsl(231, 100%, 97%)',
            top: 195,
            marginLeft: 28,
            fontSize: '0.9rem',
          }}
        >
          Feedback Board
        </Typography>
        </>
}
      </Card>
    </div>
  );
}
