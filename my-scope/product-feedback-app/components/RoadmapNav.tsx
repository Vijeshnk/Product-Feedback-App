import { Box, AppBar, Toolbar, IconButton, Typography, Button, Stack, Grid, Link } from '@mui/material'
import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Appbutton} from '@product_feedback/scope.buttons.appbutton'

type Props = {}

const RoadmapNav = (props: Props) => {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
    <AppBar   sx={{position:'relative',top:100,height:120,maxWidth:'75%',borderRadius:"10px"}} >
      <Toolbar>
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid spacing={2} sx={{position:'relative' ,top:"20px"}}>

      {/* navigate before icon */}
      <Grid container sx={{ color: 'white' }}>
      <Grid>
      <NavigateBeforeIcon />
      </Grid>
      <Grid >
      <Link href="/" color="inherit" underline="none" sx={{fontWeight:600,fontFamily:'Jost'}}>
  {'Go Back'}
</Link>
        
      </Grid>
      </Grid>

        <Typography sx={{fontWeight:700,fontFamily:'Jost',fontSize:"1.4rem",position:"relative",left:'8px'}}>Roadmap</Typography>
      </Grid>

        <Grid direction='row' spacing={2}>
          {/* add feedback button  */}
          <div style={{ marginLeft: '18rem',height:20 }}>
                <Appbutton>+ Add Feedback</Appbutton>
              </div>
        </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </Box>

  )
}

export default RoadmapNav