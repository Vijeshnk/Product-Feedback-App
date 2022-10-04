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
          <Button href='/feedback'
            style={{
              borderRadius: '10px',
              backgroundColor: 'hsl(282, 83%, 52%)',
              padding: '15px 35px',
              position:'relative',
              top:'30px',
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '15px',
              
            }}
            variant="contained"
          >
            + Add Feedback
          </Button>
              
        </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </Box>

  )
}

export default RoadmapNav