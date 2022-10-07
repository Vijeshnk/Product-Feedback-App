import { Container, Stack } from '@mui/material';
import React from 'react';
import { Comment } from '@product_feedback/scope.textfield.comment';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';

type Props = {};

const PostReply = (props: Props) => {
  return (
    <Stack direction="row" sx={{ marginLeft: '8%', marginTop: '3%' }}>
      <Comment placeholder="Ctrl + Enter" />
      <span style={{ marginLeft: '5%' }}>
        <Appbutton>Post Reply</Appbutton>
      </span>
    </Stack>
  );
};

export default PostReply;
