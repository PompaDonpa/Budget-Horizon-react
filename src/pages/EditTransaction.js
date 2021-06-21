import React from 'react'

import EditForm from '../components/EditForm'

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

const EditTransaction = () => {
  const classes = useStyles()
  return (
    <>
    <Box boxShadow={3} className={classes.box}>
      <Typography variant='h5' className={classes.title}>
        Edit Transaction
      </Typography>
      <Typography variant='body2' className={classes.title}>
        please fill out the form
      </Typography>
    </Box>
    <div>Balance</div>
      <EditForm />
    </>
  )
}

export default EditTransaction
