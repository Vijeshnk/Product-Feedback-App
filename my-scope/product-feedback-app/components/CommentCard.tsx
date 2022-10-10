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
      filter(arg0: (item: any) => any): unknown;
      map(arg0: (comment: any) => JSX.Element | undefined): React.ReactNode;
      comment_id: string;
      name: string;
      username: string;
      comment: string;
      imgsrc: any;
      replies: {
        map(arg0: (replyingUser: any) => void): JSX.Element;
        reply_id: string;
        name: string;
        username: string;
        comment: string;
        imgsrc: any;
      };
    };
  };
};

const CommentCard = ({ tagItem }: Props) => {
  return (
    <Card
      sx={{
        ml: 20,
        mt: 3,
        mr: '13%',
        pb: 8,
        borderRadius: '10px',
        boxShadow: 'none',
      }}
    >
      <UserComments tagItem={tagItem} />
    </Card>
  );
};

export default CommentCard;
