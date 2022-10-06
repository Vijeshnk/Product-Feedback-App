import { Card, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import UserComments from './UserComments';

type Props = {
  tagItem: {
    id: number;
    heading: string;
    tagline: string;
    chipName: string;
    voteCount: number;
    commentCount: number;
    comments: {
      comment_id: number;
      name: string;
      username: string;
      comment: string;
      imgsrc: any;
    }[];
  };
};

const CommentCard = ({ tagItem }: Props) => {
  return (
    <Card
      sx={{
        ml: 20,
        mt: 3,
        mr: '13%',
        pb: 3,
        mb: 10,
        borderRadius: '10px',
        boxShadow: 'none',
      }}
    >
      <Typography
        sx={{
          ml: 4,
          my: 2,
          fontSize: '1.2rem',
          fontWeight: 550,
          color: 'primary.main',
        }}
      >
        4 &nbsp; Comments
      </Typography>
      <UserComments tagItem={tagItem} />
    </Card>
  );
};

export default CommentCard;
