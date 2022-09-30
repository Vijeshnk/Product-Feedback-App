import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export type FeedbackboardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Feedbackboard({ children }: FeedbackboardProps) {
  return (
    <div>
      <Card sx={{ width: 260, mt: 15, ml: 25, borderRadius: '10px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://product-feedback-app.herokuapp.com/static/media/background-header.bc782ba0.png"
        />

        <Typography
          style={{
            position: 'absolute',
            color: 'white',
            top: 190,
            marginLeft: 28,
            fontSize: '1.3rem',
            fontWeight: 'bold',
          }}
        >
          Frontend Mentor{' '}
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            color: 'hsl(231, 100%, 97%)',
            top: 220,
            marginLeft: 28,
            fontSize: '0.9rem',
          }}
        >
          Feedback Board
        </Typography>
      </Card>
    </div>
  );
}
