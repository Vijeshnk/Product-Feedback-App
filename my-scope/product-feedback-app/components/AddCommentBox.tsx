import React, { ChangeEvent } from 'react';
import { Comment } from '@product_feedback/scope.textfield.comment';
import { Card, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';


type Props = {};

const AddCommentBox = (props: Props) => {
  const [input, setInput] = React.useState("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
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
        <OutlinedInput
        multiline
        rows={3}
            inputProps={{
              maxLength: 225,
            }}
              
              onChange={inputHandler}
            sx={{
              height: '10ch',
              borderRadius: '6px',
              color: 'hsl(231,33%,34%)',
              bgcolor: 'hsl(230, 60%, 98%)',
            }}
            fullWidth
          />
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
            {225 - input.length}   characters left
            </Typography>
            <div style={{ position: 'absolute', right: '27%' }}>
              <Appbutton>Post Comment</Appbutton>
            </div>
            
          </Stack>
        </div>
      </Card>
    </>
  );
};

export default AddCommentBox;
