import {
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';
import { Votebutton } from '@myorg/product_feedback.scope.buttons.votebutton';
import { Commenticon } from '@myorg/product_feedback.scope.icons.commenticon';
import ToggleButton from './ToggleButton';
type Props = {
  tagItem: {
    sort(arg0: (a: any, b: any) => number): unknown;
    id: number;
    heading: string;
    tagline: string;
    chipName: string;
    voteCount: number;
    commentCount: number;
  };
};

const TagCardSolution = ({ tagItem }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(tagItem.voteCount);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCount = () => {
    setIsActive(!isActive);
    !isActive ? setCount(tagItem.voteCount + 1) : setCount(tagItem.voteCount);
  };

  return (
    <Stack
      // direction="row"
      sx={{
        flexDirection: {
          xs: 'row',
          sm: 'row',
          md: 'column',
          lg: 'row',
        },
      }}
    >
      <Stack sx={{ marginTop: 3, marginLeft: 3 }}>
        {!matches && (
          <div
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleCount();
            }}
          >
            <Votebutton
              isActive
              onClick={handleCount}
              // onMouseDown={(event) => event.stopPropagation()}
            >
              {count}
            </Votebutton>
          </div>
        )}
      </Stack>
      <Stack direction="column">
        <Typography
          sx={{
            ml: {
              xs: 2,
              sm: 2,
              md: 6,
              lg: 6,
            },
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
            ml: {
              xs: 2,
              sm: 2,
              md: 6,
              lg: 6,
            },
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
        {matches && (
          <div
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            style={{ marginTop: 30, marginLeft: 12 }}
          >
            <ToggleButton num={count} />
          </div>
        )}
      </Stack>
      {!matches && (
        <div
          style={{
            color: '#000',
            marginTop: '7%',
            marginLeft: '18rem',
          }}
        >
          <Commenticon>{tagItem.commentCount}</Commenticon>
        </div>
      )}
      {matches && (
        <div
          style={{
            color: '#000',
            marginTop: 170,
            marginRight: '20%',
          }}
        >
          <Commenticon>{tagItem.commentCount}</Commenticon>
        </div>
      )}
    </Stack>
  );
};

export default TagCardSolution;
