import { Card, CardContent, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';

type Props = {};

const ChipGroup = (props: Props) => {
  const [chip, setChip] = useState(false);
  return (
    <>
      <Card
        sx={{
          width: 260,
          height: 170,
          mt: 3,
          borderRadius: '10px',
          ml: '12.5rem',
        }}
      >
        <CardContent>
          <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
            <Styledchip>All</Styledchip>
            <Styledchip>UI</Styledchip>
            <Styledchip>UX</Styledchip>
            <Styledchip>Enhancement</Styledchip>
            <Styledchip>Bug</Styledchip>
            <Styledchip>Feature</Styledchip>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ChipGroup;
