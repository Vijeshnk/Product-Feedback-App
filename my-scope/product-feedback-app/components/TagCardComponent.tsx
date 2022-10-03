import { Card, Typography, Stack } from '@mui/material';
import React from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';
import { Votebutton } from '@myorg/product_feedback.scope.buttons.votebutton';
import { Commenticon } from '@myorg/product_feedback.scope.icons.commenticon';

type Props = {};

const Tags = [
  {
    id: 1,
    heading: '4 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Bug',
    voteCount: 44,
    commentCount: 4,
  },
  {
    id: 2,
    heading: '2 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UI',
    voteCount: 22,
    commentCount: 3,
  },
  {
    id: 3,
    heading: '3 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UX',
    voteCount: 19,
    commentCount: 2,
  },
  {
    id: 4,
    heading: 'Add tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Enhancement',
    voteCount: 17,
    commentCount: 4,
  },
];

const TagCardComponent = (props: Props) => {
  return (
    <>
      {Tags.map((tagItem) => {
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
              <div style={{ marginTop: '7%', marginLeft: '18rem' }}>
                <Commenticon>{tagItem.commentCount}</Commenticon>
              </div>
            </Stack>
          </Card>
        );
      })}
    </>
  );
};

export default TagCardComponent;
