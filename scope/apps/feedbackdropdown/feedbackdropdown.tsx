import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type FeedbackdropdownProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Feedbackdropdown({ children }: FeedbackdropdownProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 200,mt:10,ml:10,}}>
      <FormControl fullWidth>
       
        <Select
        
          value={age}
          
          onChange={handleChange}
        
        >
            
          <MenuItem   sx={{ 
            ':hover': {
                bgcolor: 'white', // theme.palette.primary.main
                color: '#d500f9',
              },
         }} value={1}>Feature</MenuItem>
          <MenuItem sx={{ 
            ':hover': {
                bgcolor: 'white', // theme.palette.primary.main
                color: '#d500f9',
              },
         }} value={2}>UI</MenuItem>
          <MenuItem sx={{ 
            ':hover': {
                bgcolor: 'white', // theme.palette.primary.main
                color: '#d500f9',
              },
         }} value={3}>UX</MenuItem>
          <MenuItem sx={{ 
            ':hover': {
                bgcolor: 'white', // theme.palette.primary.main
                color: '#d500f9',
              },
         }} value={4}>Enhancement</MenuItem>
          <MenuItem sx={{ 
            ':hover': {
                bgcolor: 'white', // theme.palette.primary.main
                color: '#d500f9',
              },
         }} value={5}>Bug</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
