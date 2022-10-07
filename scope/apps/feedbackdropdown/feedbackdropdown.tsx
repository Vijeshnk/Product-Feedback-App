import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, Link, Paper, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ImageList from '@mui/material/ImageList';
import { Container, Stack } from 'react-bootstrap';

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
    <Grid container>
      <Link
        href="/"
        underline="none"
        sx={{ position: 'relative', left: 320, top: 120 }}
      >
        <Typography
          sx={{
            fontSize: 13.5,
           
           
            fontWeight: 'bold',
            color: '#3A4373',
          }}
        >
          <NavigateBeforeIcon
            sx={{ color: 'blue', position: 'relative', top: 7 }}
          />
          Go Back
        </Typography>
      </Link>
      <ImageList sx={{ position: 'relative', left: '300px', top: '185px' }}>
        <img src="https://product-feedback-app-jay.netlify.app/static/media/icon-new-feedback.de9414c7.svg" />
      </ImageList>
          <Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center" sx={{marginBottom:10}} >
      <Paper sx={{ mt: 18,pb:8, borderRadius: 3,minWidth:'50%' }}>
        <Typography
          sx={{
            fontSize: 22,
            pt: 5,
            ml: 5,
            fontWeight: 'bold',
            color: '#3A4373',
          }}
        >
          Create New Feedback
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            ml: 5,
            fontWeight: 'bold',
            mt: 3,
            color: '#3A4373',
          }}
        >
          Feedback Title
        </Typography>
        <Typography
          sx={{ fontSize: 12, ml: 5, fontWeight: 'bold', color: '#647196' }}
        >
          Add a short, descriptive headline
        </Typography>
        <TextField   inputProps={{
    maxLength: 50
  }}
          sx={{position:'relative',top:'10px',left:"42px",minWidth:'85%',backgroundColor: '#F7F8FD',}}
          placeholder="Max 50 Characters"
        />

        <Typography
          sx={{
            fontSize: 15,
            ml: 5,
            fontWeight: 'bold',
            mt: 3,
            color: '#3A4373',
          }}
        >
          Category
        </Typography>
        <Typography
          sx={{ fontSize: 12, ml: 5, fontWeight: 'bold', color: '#647196' }}
        >
          Choose a category for your feedback
        </Typography>
        {/* dropdown  */}
       
          <FormControl sx={{position:'relative',top:'10px',left:"42px",width:"85%",backgroundColor: '#F7F8FD'}}>
            <Select value={age} onChange={handleChange}>
              <MenuItem
                sx={{
                  ':hover': {
                    bgcolor: 'white', // theme.palette.primary.main
                    color: '#d500f9',
                  },
                }}
                value={1}
              >
                Feature
              </MenuItem>
              <MenuItem
                sx={{
                  ':hover': {
                    bgcolor: 'white', // theme.palette.primary.main
                    color: '#d500f9',
                  },
                }}
                value={2}
              >
                UI
              </MenuItem>
              <MenuItem
                sx={{
                  ':hover': {
                    bgcolor: 'white', // theme.palette.primary.main
                    color: '#d500f9',
                  },
                }}
                value={3}
              >
                UX
              </MenuItem>
              <MenuItem
                sx={{
                  ':hover': {
                    bgcolor: 'white', // theme.palette.primary.main
                    color: '#d500f9',
                  },
                }}
                value={4}
              >
                Enhancement
              </MenuItem>
              <MenuItem
                sx={{
                  ':hover': {
                    bgcolor: 'white', // theme.palette.primary.main
                    color: '#d500f9',
                  },
                }}
                value={5}
              >
                Bug
              </MenuItem>
            </Select>
          </FormControl>
        
        <Typography
          sx={{ fontSize: 15,fontWeight: 'bold', color: '#3A4373',position:'relative',top:'10px',left:"42px",marginTop:'10px' }}
        >
          Feedback Detail
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            
            fontWeight: 'bold',
            color: '#647196',
            position:'relative',top:'10px',left:"42px"
          }}
        >
          Include any specific comments on what should be improved, added, etc.
        </Typography>

        {/* Feedback details */}
        <TextField
          inputProps={{
            maxLength: 255
          }}
          sx={{ position:'relative',top:'10px',left:"42px",minWidth:'85%',backgroundColor: '#F7F8FD',marginTop:'10px' }}
          multiline
          rows={4}
          placeholder="Max 255 Characters"
        />
        {/* reusing the button  */}
        <Grid sx={{position:'relative',top:'35px',display:'flex',justifyContent:'flex-end'}}>
          
       
          
          <Button
            style={{
              borderRadius: '10px',
              backgroundColor: '#3a4374',
              padding: '15px 15px',
              position:'relative',
              right:'60px',
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '15px',
              textTransform: 'capitalize',
            }}
            variant="contained"
          >
            cancel
          </Button>
          <Button
            style={{
              borderRadius: '10px',
              backgroundColor: 'hsl(282, 83%, 52%)',
              padding: '15px 35px',
              position:'relative',
              right:'50px',
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '15px',
              textTransform: 'capitalize',
            }}
            variant="contained"
          >
            add feedback
          </Button>
          
        </Grid>
      </Paper>
      </Grid>
    </Grid>
  );
}
