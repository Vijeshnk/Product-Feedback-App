import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Stack } from '@mui/material';

export type VotebuttonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: 'hsl(0, 0%, 10%)',
  backgroundColor: 'hsl(231, 100%, 97%)',
  borderRadius: '10px',
  height: '3.5rem',
  minWidth: '40px',
  fontWeight: 700,
  fontFamily: 'Jost',
  '&:hover': {
    backgroundColor: 'hsl(230, 100%, 90%)',
  },
  '&:active': {
    backgroundColor: 'hsl(230, 76%, 67%)',
    color: 'hsl(0, 0%, 100%)',
    path: {
      stroke: 'hsl(0, 0%, 100%)',
    },
  },
}));

export function Votebutton({ children }: VotebuttonProps) {
  return (
    <div>
      <ColorButton variant="contained" size="small">
        <Stack direction="column" sx={{ placeItems: 'center' }}>
          <div>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 6l4-4 4 4"
                className="svgStyle"
                stroke="#4661E6"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
          {children}
        </Stack>
      </ColorButton>
    </div>
  );
}
