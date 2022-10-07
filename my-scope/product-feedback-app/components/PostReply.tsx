import { Container, Stack } from '@mui/material';
import React from 'react';
import { Comment } from '@product_feedback/scope.textfield.comment';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';

type Props = {};

const PostReply = (props: Props) => {
  return (
    <Container>
      <Stack direction="row" sx={{ marginLeft: '8%' }}>
        <Comment placeholder="Ctrl + Enter" />
        <Appbutton>Post Reply</Appbutton>
      </Stack>
    </Container>
  );
};

export default PostReply;
