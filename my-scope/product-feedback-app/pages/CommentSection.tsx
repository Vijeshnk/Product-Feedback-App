import { Button, Container, Link, Stack, Typography } from '@mui/material';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';
import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import TagCardSolution from '../components/TagCardSolution';

type Props = {
  tagItem: {
    id: number;
    heading: string;
    tagline: string;
    chipName: string;
    voteCount: number;
    commentCount: number;
  };
};

const CommentSection = ({ tagItem }: Props) => {
  return (
    <Container>
      <Link
        href="/"
        underline="none"
        sx={{ position: 'relative', left: '10%', top: 50 }}
      >
        <Typography
          sx={{
            fontSize: 14,
            pt: 3,
            ml: 5,
            fontWeight: 'bold',
            color: 'hsl(224, 20%, 49%)',
          }}
        >
          <NavigateBeforeIcon
            sx={{ color: 'blue', position: 'relative', top: 5.5 }}
          />
          Go Back
        </Typography>
      </Link>
      <Button
        style={{
          borderRadius: '10px',
          backgroundColor: 'hsl(230,76%,59%)',
          padding: '8px 28px',
          left: '65%',
          fontFamily: 'Jost',
          fontWeight: 600,
          fontSize: '15px',
          textTransform: 'capitalize',
          top: '0.8rem',
        }}
        variant="contained"
      >
        Edit Feedback
      </Button>
      <TagCardSolution tagItem={tagItem} />
    </Container>
  );
};

export default CommentSection;
