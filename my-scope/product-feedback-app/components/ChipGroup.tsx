import { Card, CardContent, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Styledchip } from '@product_feedback/scope.chips.styledchip';

type Props = {};

const ChipGroup = (props: Props) => {
  const chipSet = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  return (
    <>
      <Card
        sx={{
          width: 260,
          height: {xs:170,sm:260,md:170,lg:170},
          mt: 3,
          borderRadius: '10px',
          fontWeight: 600,
          boxShadow: 'none',
          marginLeft:{xs:0,sm:10,md:0,lg:0}
        }}
      >
        <CardContent>
          <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
            {chipSet.map((value) => {
              return <Styledchip key={value}>{value}</Styledchip>;
            })}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ChipGroup;
