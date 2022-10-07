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
      map(arg0: (comment: any) => JSX.Element): React.ReactNode;
      comment_id: number;
      name: string;
      username: string;
      comment: string;
      imgsrc: any;
      replies: {
        map(arg0: (replyingUser: any) => void): JSX.Element;
        reply_id: number;
        name: string;
        username: string;
        comment: string;
        imgsrc: any;
      };
    };
  };
};

const UserComments = ({ tagItem }: Props) => {
  // const firstComment = tagItem.comments.slice(0, 1);
  // const userComment = tagItem.comments.slice(1, tagItem.commentCount + 1);

  const [reply, setReply] = useState(false);
  // const [replyValue, setReplyValue] = useState('Reply');

  const handleReply = () => {
    setReply(!reply);
  };

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
                      right: '25%',
                      mt: '4',
                      fontWeight: 550,
                      fontFamily: 'Jost',
                      textTransform: 'capitalize',
                    }}
                    onClick={handleReply}
                  >
                    {reply ? 'Cancel' : 'Reply'}
                  </Button>
                </Stack>
                {reply ? (
                  <span>
                    <PostReply />
                  </span>
                ) : null}
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
