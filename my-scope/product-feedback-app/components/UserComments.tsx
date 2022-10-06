import React, { useState } from 'react';
import { Userinfo } from '@product_feedback/scope.avatar.userinfo';
import {
  Button,
  Card,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

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

const UserComments = ({ tagItem }: Props) => {
  const firstComment = tagItem.comments.slice(0, 1);
  const userComment = tagItem.comments.slice(1, tagItem.commentCount + 1);
  return (
    <Container>
      {tagItem.commentCount >= 1
        ? firstComment.map((firstUser) => {
            return (
              <div style={{ marginLeft: '3.5%' }}>
                <Stack direction="row">
                  <Stack direction="column">
                    <Userinfo
                      src={firstUser.imgsrc}
                      name={firstUser.name}
                      username={firstUser.username}
                    />
                    <Typography
                      sx={{
                        ml: 8.5,
                        fontSize: '0.95rem',
                        color: 'primary.main',
                        fontFamily: 'Jost',
                      }}
                    >
                      {firstUser.comment}
                    </Typography>
                  </Stack>
                  <Button
                    sx={{
                      color: 'hsl(230, 76%, 59%)',
                      position: 'absolute',
                      right: '25%',
                      mt: '4',
                      fontWeight: 550,
                      fontFamily: 'Jost',
                      textTransform: 'capitalize',
                    }}
                  >
                    Reply
                  </Button>
                </Stack>
              </div>
            );
          })
        : null}
      {tagItem.commentCount > 1
        ? userComment.map((comment) => {
            return (
              <div style={{ marginLeft: '4.8%' }}>
                <Stack direction="row">
                  <Divider orientation="vertical" flexItem sx={{ mr: 3 }} />
                  <div style={{ marginTop: 20 }}>
                    <Stack direction="column">
                      <Userinfo
                        src={comment.imgsrc}
                        name={comment.name}
                        username={comment.username}
                      />
                      <Typography
                        sx={{
                          ml: 8.5,
                          fontSize: '0.95rem',
                          color: 'primary.main',
                          fontFamily: 'Jost',
                        }}
                      >
                        {comment.comment}
                      </Typography>
                    </Stack>
                    <Button
                      sx={{
                        color: 'hsl(230, 76%, 59%)',
                        position: 'absolute',
                        right: '25%',
                        mt: -10,
                        fontWeight: 550,
                        fontFamily: 'Jost',
                        textTransform: 'capitalize',
                      }}
                    >
                      Reply
                    </Button>
                  </div>
                </Stack>
              </div>
            );
          })
        : null}
    </Container>
  );
};

export default UserComments;
