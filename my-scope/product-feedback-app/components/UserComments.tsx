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
import PostReply from './PostReply';

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

const UserComments = ({ tagItem }: Props) => {
  const [reply, setReply] = useState(false);
  const [replyValue, setReplyValue] = useState(0);

  const handleReply = (id) => {
    console.log(id);
    id ? (setReply(!reply), setReplyValue(id)) : null;
  };

  // const handleReplyValue = () => {
  //   setReplyValue(!reply);
  //   console.log(replyValue);
  // };

  return (
    <Container>
      <Typography
        sx={{
          ml: 1,
          my: 3,
          fontSize: '1.2rem',
          fontWeight: 550,
          color: 'primary.main',
        }}
      >
        {tagItem.commentCount} &nbsp; Comments
      </Typography>
      {tagItem.comments.map((comment) => {
        return (
          <>
            <Container>
              <div style={{ marginTop: '2%', marginLeft: '-1.5%' }}>
                <Stack direction="row">
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
                      right: '27%',
                      mt: '4',
                      fontWeight: 550,
                      fontFamily: 'Jost',
                      textTransform: 'capitalize',
                    }}
                    onClick={() => handleReply(comment.comment_id)}
                  >
                    {reply && replyValue == comment.comment_id
                      ? 'Cancel'
                      : 'Reply'}
                  </Button>
                </Stack>
                {replyValue == comment.comment_id && reply ? (
                  <PostReply />
                ) : null}
                {console.log(comment.comment_id)}
              </div>

              {comment.replies
                ? comment.replies.map((replyingUser) => {
                    return (
                      <div style={{ marginLeft: '1%' }}>
                        <Stack direction="row">
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ mr: 3 }}
                          />
                          <div style={{ marginTop: 20 }}>
                            <Stack direction="column">
                              <Userinfo
                                src={replyingUser.imgsrc}
                                name={replyingUser.name}
                                username={replyingUser.username}
                              />
                              <Typography
                                sx={{
                                  ml: 8.5,
                                  fontSize: '0.95rem',
                                  color: 'primary.main',
                                  fontFamily: 'Jost',
                                }}
                              >
                                {replyingUser.comment}
                              </Typography>
                            </Stack>
                            <Button
                              sx={{
                                color: 'hsl(230, 76%, 59%)',
                                position: 'absolute',
                                right: '27%',
                                mt: -10,
                                fontWeight: 550,
                                fontFamily: 'Jost',
                                textTransform: 'capitalize',
                              }}
                              onClick={() => handleReply(replyingUser.reply_id)}
                            >
                              {reply && replyValue == replyingUser.reply_id
                                ? 'Cancel'
                                : 'Reply'}
                            </Button>
                          </div>
                        </Stack>
                        {replyValue == replyingUser.reply_id && reply ? (
                          <PostReply />
                        ) : null}
                        {console.log(replyingUser.reply_id)}
                      </div>
                    );
                  })
                : null}
              {/* </div> */}
            </Container>
            <div
              style={{
                backgroundColor: '#f2f2f2',
                margin: '32px 0px',
                height: '1px',
                width: '100%',
              }}
            ></div>
          </>
        );
      })}
    </Container>
  );
};

export default UserComments;
