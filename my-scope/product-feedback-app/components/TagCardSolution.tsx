import { Typography, Stack } from '@mui/material';
import React from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';
import { Votebutton } from '@myorg/product_feedback.scope.buttons.votebutton';
import { Commenticon } from '@myorg/product_feedback.scope.icons.commenticon';
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

const TagCardSolution = ({ tagItem }: Props) => {
  return (
    <Stack direction="row">
      <Stack sx={{ marginTop: 3, marginLeft: 3 }}>
        <Votebutton>{tagItem.voteCount}</Votebutton>
      </Stack>
      <Stack direction="column">
        <Typography
          sx={{
            ml: 6,
            mt: 3,
            fontSize: '1.2rem',
            fontWeight: 650,
            color: 'primary.main',
            fontFamily: 'Jost',
          }}
        >
          {tagItem.heading}
        </Typography>
        <Typography
          sx={{
            ml: 6,
            mt: 0.5,
            fontSize: '1rem',
            color: 'primary.main',
            fontWeight: 500,
            fontFamily: 'Jost',
          }}
        >
          {tagItem.tagline}
        </Typography>
        <div
          style={{
            marginTop: 5,
            marginLeft: 40,
            fontWeight: 600,
            marginBottom: 5,
          }}
        >
          <Styledchip>{tagItem.chipName}</Styledchip>
        </div>
      </Stack>
      <div
        style={{
          color: '#000',
          marginTop: '7%',
          marginLeft: '18rem',
        }}
      >
        <Commenticon>{tagItem.commentCount}</Commenticon>
      </div>
    </Stack>
  );
};

export default TagCardSolution;
