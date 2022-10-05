import { Grid } from '@mui/material'
import React from 'react'
import RoadmapCard from '../components/RoadmapCard'
import RoadmapNav from '../components/RoadmapNav'




type Props = {}

const RoadMap = (props: Props) => {
  
  return (
    <>
    <RoadmapNav/>
    <Grid container spacing={4} sx={{paddingX:'100px', justifyContent:'center',marginTop:'100px'}}>
      <Grid item  >
    <RoadmapCard/>
    </Grid>
    <Grid item >
    <RoadmapCard/>
    </Grid>
    <Grid item >
    <RoadmapCard/>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <RoadmapCard/>
    </Grid>
    </Grid>
    </>
  )
}

export default RoadMap

function makeStyles(arg0: { gridContainer: { paddingLeft: string; paddingRight: string } }): any {
  throw new Error('Function not implemented.')
}
