import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Paper, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ImageList from '@mui/material/ImageList';

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
      <div style={{position:'relative',left:320,top:150}}>
     <Typography sx={{fontSize:13.5,pt:5,ml:5,fontWeight:'bold',color:'#3A4373'}}><NavigateBeforeIcon sx={{color:'blue',position:'relative',top:8}}/>Go Back</Typography>
     </div>
       <ImageList sx={{position:'relative', left:'400px', top:'170px'}}>
      <img  src='https://product-feedback-app-jay.netlify.app/static/media/icon-new-feedback.de9414c7.svg'/>
      </ImageList>

      <Paper sx={{mt:18,mx:45,borderRadius:3}}>
        <Typography sx={{fontSize:22,pt:5,ml:5,fontWeight:'bold',color:'#3A4373'}}>Create New Feedback</Typography>
        <Typography sx={{fontSize:15,ml:5,fontWeight:'bold',mt:3,color:'#3A4373'}}>Feedback Title</Typography>
        <Typography sx={{fontSize:12,ml:5,fontWeight:'bold',color:'#647196'}}>Add a short, descriptive headline</Typography>
      <TextField
          sx={{ml:5,mt:2,width: 480,backgroundColor:'#F7F8FD'}}          
          placeholder="Max 50 Characters"
          
        />

<Typography sx={{fontSize:15,ml:5,fontWeight:'bold',mt:3,color:'#3A4373'}}>Category</Typography>
        <Typography sx={{fontSize:12,ml:5,fontWeight:'bold',color:'#647196'}}>Choose a category for your feedback</Typography>
        {/* dropdown  */}
      <Box sx={{width: 480,ml:5,mt:2,pb:5}}>
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
    <Typography sx={{fontSize:15,ml:5,fontWeight:'bold',color:'#3A4373'}}>Feedback Detail</Typography>
        <Typography sx={{fontSize:12,ml:5,fontWeight:'bold',color:'#647196',pb:3}}>Include any specific comments on what should be improved, added, etc.</Typography>

     {/* Feedback details */}
     <TextField
          
          sx={{ml:5,width: 480,backgroundColor:'#F7F8FD',mb:5}}
          multiline
          rows={4}
          placeholder="Max 255 Characters"

        />
        {/* reusing the button  */}
 <div style={{position: 'relative', left: 60}}>
 <Button
    style={{
        borderRadius: '10px',
        backgroundColor: 'hsl(282, 83%, 52%)',
        padding: "15px 35px",
       
        left:'310px',
        fontFamily: 'Jost',
        fontWeight: 600,
          fontSize: '15px',
          textTransform: 'capitalize',
    }}
    variant="contained"
    >
    add feedback
</Button>
<Button
    style={{
        borderRadius: '10px',
        backgroundColor: '#3a4374',
        padding: "15px 15px",
       
        left:'40px',
        fontFamily: 'Jost',
        fontWeight: 600,
          fontSize: '15px',
          textTransform: 'capitalize',
    }}
    variant="contained"
    >
    cancel
</Button>


 </div>
    </Paper>
    </div>
  );
}
