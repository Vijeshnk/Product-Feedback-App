import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Link, Menu, Typography, useMediaQuery } from '@mui/material';
import LightbulbCircleOutlined from '@mui/icons-material/LightbulbCircleOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Appbutton } from '@product_feedback/scope.buttons.appbutton';
import { Divider } from '@mui/material';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
  const [commentValue, setcommentValue] = React.useState('Most Upvotes');
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const SmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event) => {
    setcommentValue(event.target.id);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  const handleIconChange = () => {
    return open ? (
      <KeyboardArrowDownIcon htmlColor="#fff" />
    ) : (
      <KeyboardArrowUpIcon htmlColor="#fff" />
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleFunctions = (event) => {
    handleClose(), handleClick(event);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            mt: { xs: 19, sm: 10, md: 12, lg: 12 },
            ml: 4,
            flexGrow: 1,
          }}
        >
          <AppBar
            sx={{
              position: {
                xs: 'absolute',
                sm: 'static',
                md: 'static',
                lg: 'static',
              },
              top: { xs: 85, sm: 0, md: 0, lg: 0 },
              borderRadius: { xs: 'none', sm: '10px', md: '10px', lg: '10px' },
              boxShadow: 'none',
            }}
          >
            <Toolbar>
              {!matches && <LightbulbCircleOutlined />}

              {!matches && (
                <Typography sx={{ ml: 2, fontWeight: 700, fontFamily: 'Jost' }}>
                  4 Suggetions
                </Typography>
              )}
              <Typography
                sx={{
                  ml: {
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                  },
                  fontFamily: 'Jost',
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                Sort by :{' '}
              </Typography>
              <FormControl>
                <Button onClick={handleFunctions} endIcon={handleIconChange()}>
                  <Typography
                    color="#fff"
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: 14,
                      fontFamily: 'Jost',
                      fontWeight: 700,
                    }}
                  >
                    {commentValue}
                  </Typography>
                </Button>
                <Menu open={open} onClick={handleClose} anchorEl={anchorEl}>
                  <MenuItem
                    id={'Most Upvotes'}
                    onClick={handleChange}
                    sx={{
                      ':hover': {
                        color: 'hsl(282, 83%, 52%)',
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    Most Upvotes
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    id={'Least Upvotes'}
                    onClick={handleChange}
                    sx={{
                      ':hover': {
                        color: 'hsl(282, 83%, 52%)',
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    Least Upvotes
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    id={'Most Comments'}
                    onClick={handleChange}
                    sx={{
                      ':hover': {
                        color: 'hsl(282, 83%, 52%)',
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    Most Comments
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    id={'Least Comments'}
                    onClick={handleChange}
                    sx={{
                      ':hover': {
                        color: 'hsl(282, 83%, 52%)',
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    Least Comments
                  </MenuItem>
                </Menu>
              </FormControl>
              {!matches && (
                <div style={{ marginLeft: '16rem' }}>
                  <Link href="/feedback" underline="none">
                    <Appbutton>+ Add Feedback</Appbutton>
                  </Link>
                </div>
              )}
              {(matches || SmallScreen) && (
                <div style={{ marginLeft: '20%' }}>
                  <Link href="/feedback" underline="none">
                    <Appbutton>+ Add Feedback</Appbutton>
                  </Link>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
