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
      <Card
        sx={{
          width: 260,
          mt: 12,
          ml: 25,
          borderRadius: '10px',
          boxShadow: 'none',
        }}
      >
        <CardMedia
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
      </Card>
    </div>
  );
}
