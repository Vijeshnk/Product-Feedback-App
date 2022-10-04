import { Card, Typography } from '@mui/material';
import { Userinfo } from '@product_feedback/scope.avatar.userinfo';
import React from 'react';

type Props = {};

const CommentCard = (props: Props) => {
  return (
    <Card
      sx={{
        ml: 20,
        mt: 3,
        mr: '13%',
        pb: 1.5,
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
      <div style={{ marginLeft: '3.5%' }}>
        <Userinfo
          src={require('../assets/images/image-anne.jpg')}
          name="Anne Maria"
          username="@anne_m"
        />
      </div>
    </Card>
  );
};

export default CommentCard;
