import { Box, Card, CardContent, Grid, Link, List, ListItem, Typography } from '@mui/material'
import React from 'react'

import RoadmapNav from '../components/RoadmapNav'

import {Styledchip} from '@product_feedback/scope.chips.styledchip'
import {Votebutton} from '@myorg/product_feedback.scope.buttons.votebutton'
import {Commenticon} from '@myorg/product_feedback.scope.icons.commenticon'

import ToggleButton from '../components/ToggleButton'

type Props = {}

const RoadMap = (props: Props) => {
  
  return (
    <>
    <RoadmapNav/>
    <Grid container spacing={3} sx={{paddingX:'100px', justifyContent:'center',marginTop:'100px'}}>
      <Grid item  >
      <Box width='300px'>
     <Typography sx={{fontWeight:'bold',color:'hsl(231,33%,34%)',fontSize:'1.2rem'}}>Planned (1)</Typography>
     <Typography sx={{fontWeight:500,color:'hsl(224,20%,49%)'}}>Ideas priortized for research</Typography>
      </Box>
    </Grid>
    <Grid item >
    <Box width='300px'>
     <Typography sx={{fontWeight:'bold',color:'hsl(231,33%,34%)',fontSize:'1.2rem'}}>In-Progress (1)</Typography>
     <Typography sx={{fontWeight:500,color:'hsl(224,20%,49%)'}}>Currently being developed

</Typography>
      </Box>
    </Grid>
    <Grid item >
    <Box width='300px'>
     <Typography sx={{fontWeight:'bold',color:'hsl(231,33%,34%)',fontSize:'1.2rem'}}>Live (1)</Typography>
     <Typography sx={{fontWeight:500,color:'hsl(224,20%,49%)'}}>Released features</Typography>
      </Box>
    </Grid>
  
    </Grid>
   {/* 2nd row */}
    <Grid container spacing={3} sx={{paddingX:'100px', justifyContent:'center',marginTop:'3px'}}>
      <Grid item  >
      <Box width='300px'>
      <Card sx={{borderTop:'solid',borderTopColor:'orange',borderTopWidth:'6px'}}>
        <CardContent>
        <List sx={{ listStyleType: 'disc', ml: 1, mt: -4.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'orange',
                    fontSize: '26px',
                    mt:1.5
                  }}
                >
                  <Typography
                    sx={{
                      color: 'black',
                      ml: -2,
                      fontWeight:550,
                      fontFamily: 'Jost',
                      fontSize:'0.9rem'
                    }}
                  >
                    Planned
                  </Typography>
                  <Link href="#" underline="none" sx={{position:'relative',right:'40px',color:'hsl(231,33%,34%)',fontWeight:'bold',fontSize:'1.2rem'}}>
  {'7 tags for solutions'}
</Link>
                </ListItem>
                <Typography paragraph sx={{color:'hsl(224,20%,49%)'}}>Easier to search23322 for solutions based on a specific stack.</Typography>

              </List>
              {/* imported component */}
              <div style={{position:'relative',left:'12px',fontWeight: 'bold',pointerEvents:'none'}}>
              <Styledchip >Feature</Styledchip>
              </div>
              <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box> <ToggleButton num={82}/></Box>
        <Box><Link href='#' underline="none"><Commenticon>0</Commenticon></Link></Box>
        
      </Box>

        </CardContent>
      </Card>
      {/* end of copy */}
      </Box>
      
    </Grid>
    <Grid item >
    <Box width='300px'>
    <Card sx={{borderTop:'solid',borderTopColor:'purple',borderTopWidth:'6px',borderRadius:2}}>
        <CardContent>
        <List sx={{ listStyleType: 'disc', ml: 1, mt: -4.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'purple',
                    fontSize: '26px',
                    mt:1.5
                  }}
                >
                  <Typography
                    sx={{
                      color: 'black',
                      ml: -2,
                      fontWeight:550,
                      fontFamily: 'Jost',
                      fontSize:'0.9rem'
                    }}
                  >
                    In-Progress
                  </Typography>
                  <Link href="#" underline="none" sx={{position:'relative',right:'40px',color:'hsl(231,33%,34%)',fontWeight:'bold',fontSize:'1.2rem'}}>
  {'5 tags for solutions'}
</Link>
                </ListItem>
                <Typography paragraph sx={{color:'hsl(224,20%,49%)'}}>Easier to search for solutions based on a specific stack.</Typography>

              </List>
              {/* imported component */}
              <div style={{position:'relative',left:'12px',fontWeight: 'bold',pointerEvents:'none'}}>
              <Styledchip>Bug</Styledchip>
              </div>
              <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box> <ToggleButton num={23}/></Box>
        <Box><Link href='#' underline="none"><Commenticon>1</Commenticon></Link></Box>
        
      </Box>

        </CardContent>
      </Card>
      </Box>
    </Grid>
    <Grid item >
    <Box width='300px'>
    <Card  sx={{borderTop:'solid',borderTopColor:'skyblue',borderTopWidth:'6px',borderRadius:2}}>
        <CardContent>
        <List sx={{ listStyleType: 'disc', ml: 1, mt: -4.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'skyblue',
                    fontSize: '26px',
                    mt:1.5
                  }}
                >
                  <Typography
                    sx={{
                      color: 'black',
                      ml: -2,
                      fontWeight:550,
                      fontFamily: 'Jost',
                      fontSize:'0.9rem'
                    }}
                  >
                    Live
                  </Typography>
                  <Link href="#" underline="none" sx={{position:'relative',right:'40px',color:'hsl(231,33%,34%)',fontWeight:'bold',fontSize:'1.2rem'}}>
  {'6 tags for solutions'}
</Link>
                </ListItem>
                <Typography paragraph sx={{color:'hsl(224,20%,49%)'}}>Easier to search for solutions based on a specific stack.</Typography>

              </List>
              {/* imported component */}
              <div style={{position:'relative',left:'12px',fontWeight: 'bold',pointerEvents:'none'}}>

              <Styledchip>Bug</Styledchip>
              </div>
              <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box> <ToggleButton num={75}  /></Box>
        <Box><Link href='#' underline="none"><Commenticon>1</Commenticon></Link></Box>
        
      </Box>

        </CardContent>
      </Card>
      </Box>
    </Grid>
    
    </Grid>
   
    </>
  )
}

export default RoadMap

function makeStyles(arg0: { gridContainer: { paddingLeft: string; paddingRight: string } }): any {
  throw new Error('Function not implemented.')
}
