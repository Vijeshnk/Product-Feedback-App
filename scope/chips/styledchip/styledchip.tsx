import React, { ReactNode } from 'react';
import { Chip } from '@mui/material';

export type StyledchipProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Styledchip({ children }: StyledchipProps) {
  return (
    <div>
      <Chip
        label={children}
        sx={{
          bgcolor: 'hsl(231, 100%, 97%)',
          color: 'hsl(230, 76%, 59%)',
          borderRadius: '10px',
          m: 0.5,
          ':hover': {
            bgcolor: 'hsl(230, 76%, 59%)',
            color: 'hsl(0, 0%, 100%)',
          },
        }}
        clickable
      />
    </div>
  );
}
