import React from 'react';
import { Comment } from '@product_feedback/scope.textfield.comment';
import { Card, Stack, Typography } from '@mui/material';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';

type Props = {};

const AddCommentBox = (props: Props) => {
  return (
    <>
      <Card
        sx={{
          ml: 20,
          mt: 3,
          mr: '13%',
          pt: 2,
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
          Add Comment
        </Typography>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          <Comment />
          <Stack direction="row" sx={{ mt: 3, pb: 5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '0.95rem',
                color: 'primary.main',
                fontWeight: '500',
                fontFamily: 'Jost',
              }}
            >
              225 characters left
            </Typography>
            <div style={{ position: 'absolute', right: '24%' }}>
              <Appbutton>Post Comment</Appbutton>
            </div>
          </Stack>
        </div>
      </Card>
    </>
  );
};

export default AddCommentBox;
