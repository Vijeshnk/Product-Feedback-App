import { Grid } from '@mui/material'
import React from 'react'
import RoadmapCard from '../components/RoadmapCard'
import RoadmapNav from '../components/RoadmapNav'

type Props = {}

const RoadMap = (props: Props) => {
  return (
    <>
    <RoadmapNav/>
    <Grid container>
    <RoadmapCard/>
    </Grid>
    </>
  )
}

export default RoadMap