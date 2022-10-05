import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const RoadmapCard = (props: Props) => {
  return (
    
      <Box width='300px'>
      <Card sx={{borderTop:'solid',borderTopColor:'pink'}}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>React</Typography>
          <Typography variant='body2' color='text.secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod dolorem laborum maxime illum quisquam harum rerum deserunt illo debitis.</Typography>
        </CardContent>
      </Card>
      </Box>
      
  )
}

export default RoadmapCard