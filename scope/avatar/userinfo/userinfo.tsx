import React, { ReactNode } from 'react';
import { Avatar, Typography, Stack } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export interface UserinfoProps {
  /**
   * a node to be rendered in the special component.
   */
  alt?: string;
  src: string;
  variant?: 'circle' | 'rounded' | 'square';
  sizes?: string;
  name: string;
  username: string;
  children?: ReactNode;
}

export function Userinfo({ name, username, src }: UserinfoProps) {
  return (
    <Stack direction="row">
      <Avatar alt={name} src={src} sx={{ width: 40, height: 40 }} />
      <Stack direction="column" paddingLeft={3.5}>
        <Typography
          variant="h6"
          sx={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'hsl(231, 33%, 34%)',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: '0.95rem',
            color: 'hsl(224, 20%, 49%)',
            fontFamily: 'Jost',
          }}
        >
          {username}
        </Typography>
      </Stack>
    </Stack>
  );
}
