import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled, SxProps, Theme } from '@mui/material/styles';
import Button, { ButtonClasses, ButtonProps } from '@mui/material/Button';

export type AppbuttonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: React.ReactNode;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'info'
    | 'warning'
    | undefined;
  sx?: SxProps<Theme> | undefined;
  variant?: 'text' | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('hsl(282, 83%, 52%)'),
  backgroundColor: 'hsl(282, 83%, 52%)',
  borderRadius: '10px',
  fontFamily: 'Jost',
  '&:hover': {
    backgroundColor: 'hsl(282, 83%, 52%)',
  },
}));

export function Appbutton({ children, ...rest }: AppbuttonProps) {
  return (
    <div>
      <ColorButton
        variant="contained"
        sx={{
          fontWeight: 600,
          fontSize: '15px',
          textTransform: 'capitalize',
        }}
      >
        {children}
      </ColorButton>
    </div>
  );
}
