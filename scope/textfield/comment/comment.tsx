import React, { ReactNode } from 'react';
import { FormControl, OutlinedInput, Box } from '@mui/material';

export type CommentProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Comment({ children }: CommentProps) {
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <FormControl fullWidth>
          <OutlinedInput
            placeholder=""
            sx={{
              height: '10ch',
              borderRadius: '6px',
              color: 'hsl(224, 20%, 49%)',
              bgcolor: 'hsl(230, 60%, 98%)',
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}
