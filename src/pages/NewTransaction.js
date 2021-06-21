import React from 'react'

import NewForm from '../components/NewForm'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
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

const NewTransaction = () => {
  const classes = useStyles()
  return (
    <>
    <Box boxShadow={3} className={classes.box}>
      <Typography variant='h5' className={classes.title}>
        New Transaction
      </Typography>
      <Typography variant='body2' className={classes.title}>
        Please fill the form below
      </Typography>
    </Box>
    <div>&emsp;</div>
    <NewForm />
    </>
  )
}

export default NewTransaction
