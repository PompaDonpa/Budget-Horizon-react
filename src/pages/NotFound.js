import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: '#094067'
  }
}))


//  ================================
//            MAIN FUNCTION
//  ================================


export default function NotFound (){

  const classes = useStyles()

  return (
    <Box 
    className={classes.box}
      boxShadow={3} 
    >
      <Typography 
        className={classes.title}
        variant='h5' 
      >
      Page not Found
      </Typography>
      <Typography 
        className={classes.title}
        variant='body2' 
      >
      404
      </Typography>
    </Box>
  )
}

