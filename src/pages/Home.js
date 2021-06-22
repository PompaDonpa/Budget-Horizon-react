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

export default function Home (){

  const classes = useStyles()

  return (
    <>
      <Box 
        className={classes.box}
        boxShadow={3} 
      >
        <Typography 
          className={classes.title}
          variant='h5' 
        >
        Welcome
        </Typography>
        <Typography 
          className={classes.title}
          variant='body2' 
        >
        <sub>A modern budget app</sub>
        </Typography>
      </Box>
    </>
  )
}

