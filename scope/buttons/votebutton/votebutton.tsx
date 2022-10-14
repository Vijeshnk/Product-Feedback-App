import React, { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Stack } from '@mui/material';

export type VotebuttonProps = {
  /**
   * a node to be rendered in the special component.
   */
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  children?: ReactNode;
};

export function Votebutton({ children, isActive, onClick }: VotebuttonProps) {
  const [active, setActive] = useState(false);
  const toggleActivity = () => {
    setActive((current) => !current);
  };
  const ColorButton = active
    ? styled(Button)<ButtonProps>(() => ({
        backgroundColor: 'hsl(230,76%,59%)',
        color: 'hsl(0, 0%, 100%)',
        borderRadius: '10px',
        height: '3.5rem',
        minWidth: '40px',
        fontWeight: 700,
        fontFamily: 'Jost',
        path: {
          stroke: 'hsl(0, 0%, 100%)',
        },
        '&:hover': {
          backgroundColor: 'hsl(230, 100%, 90%)',
        },
      }))
    : styled(Button)<ButtonProps>(() => ({
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
      }));
  return (
    <div>
      <ColorButton variant="contained" size="small" onClick={toggleActivity}>
        <Stack direction="column" sx={{ placeItems: 'center' }}>
          <div>
            {/* JSON.parse(localStorage.getItem('isVoteBtnActive') */}
            {isActive ? (
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
            ) : (
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  className="svgStyle"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </div>
          {children}
        </Stack>
      </ColorButton>
    </div>
  );
}
