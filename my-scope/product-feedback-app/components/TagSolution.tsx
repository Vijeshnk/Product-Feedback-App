import { Card, Typography, Stack } from '@mui/material';
import React from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';
import { Votebutton } from '@myorg/product_feedback.scope.buttons.votebutton';
import { Commenticon } from '@myorg/product_feedback.scope.icons.commenticon';
import { Link } from '@mui/material';
import { CardActionArea } from '@mui/material';
import CommentSection from '../pages/CommentSection';
import TagCardSolution from './TagCardSolution';

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

const handleNavigation = ({ tagItem }: Props) => {
  return <CommentSection tagItem={tagItem} />;
};

const TagSolution = ({ tagItem }: Props) => {
  return (
    <Card
      key={tagItem.id}
      sx={{
        ml: 4,
        mt: 3,
        pb: 1.5,
        borderRadius: '10px',
        boxShadow: 'none',
      }}
    >
      <CardActionArea
        href="/comments"
        sx={{ ':hover': { color: '#fff' } }}
        onClick={() => handleNavigation({ tagItem })}
      >
        <TagCardSolution tagItem={tagItem} />
      </CardActionArea>
    </Card>
  );
};

export default TagSolution;
