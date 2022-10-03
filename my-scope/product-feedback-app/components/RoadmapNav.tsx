import { Box, AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import React from 'react'

import {Appbutton} from '@product_feedback/scope.buttons.appbutton'

type Props = {}

const RoadmapNav = (props: Props) => {
  return (
    
    <AppBar   sx={{position:'relative',top:100,height:100,}} >
      <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold' }}>
        Roadmap
        </Typography>
        <Stack direction='row' spacing={2}>
        <Appbutton >Button</Appbutton>
        </Stack>
      </Toolbar>
    </AppBar>

  )
}

export default RoadmapNav