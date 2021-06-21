import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

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

const NotFound = () => {
  const classes = useStyles()
  return (
    <Box boxShadow={3} className={classes.box}>
      <Typography variant='h5' className={classes.title}>
        Page not Found
      </Typography>
      <Typography variant='body2' className={classes.title}>
        404
      </Typography>
    </Box>
  )
}

export default NotFound
