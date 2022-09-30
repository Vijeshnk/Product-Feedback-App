import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import LightbulbCircleOutlined from '@mui/icons-material/LightbulbCircleOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';

let theme = createTheme({
  palette: {
    primary: {
      main: '#373f68',
    },
  },
});
export type DropdownnavbarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Dropdownnavbar({ children }: DropdownnavbarProps) {
  const [commentValue, setcommentValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcommentValue(event.target.value as string);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 15, ml: 5, mr: 30 }}>
          <AppBar position="static" sx={{ borderRadius: '13px' }}>
            <Toolbar>
              <LightbulbCircleOutlined />

              <Typography sx={{ ml: 2 }}>4 Suggetions</Typography>
              <Typography sx={{ ml: 2, fontSize: 14 }}>
                &nbsp; Sort by :{' '}
              </Typography>
              <FormControl>
                <Select
                  value={commentValue}
                  onChange={handleChange}
                  sx={{ color: 'white', mr: 35 }}
                >
                  <MenuItem value={1}>Most Upvotes</MenuItem>
                  <MenuItem value={2}>Least Upvotes</MenuItem>
                  <MenuItem value={3}>Most Comments</MenuItem>
                  <MenuItem value={4}>Least Comments</MenuItem>
                </Select>
              </FormControl>
              {/* <div style={{ marginLeft: '35rem' }}> */}
              <Appbutton sx={{ ml: 20 }}>+ Add Feedback</Appbutton>
              {/* </div> */}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
