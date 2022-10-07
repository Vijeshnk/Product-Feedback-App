import React, { ReactNode } from 'react';
import { FormControl, OutlinedInput, Box, SxProps } from '@mui/material';

export type CommentProps = {
  /**
   * a node to be rendered in the special component.
   */
  sx?: SxProps;
  placeholder: string;
  children?: ReactNode;
};

export function Comment({ children, placeholder, sx }: CommentProps) {
  return (
    <div>
      <Box component="form" noValidate autoComplete="off">
        <FormControl fullWidth>
          <OutlinedInput
            placeholder={placeholder}
            sx={{
              height: '10ch',
              borderRadius: '6px',
              color: 'hsl(224, 20%, 49%)',
              bgcolor: 'hsl(230, 60%, 98%)',
            }}
            fullWidth
          />
        </FormControl>
      </Box>
    </div>
  );
}
