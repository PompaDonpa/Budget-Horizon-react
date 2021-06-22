import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import NewForm from '../components/NewForm'
import Box from '@material-ui/core/Box'

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

//  ================================
//            MAIN FUNCTION
//  ================================

export default function NewTransaction ( { addTransaction } ) {

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
        New Transaction
        </Typography>
        <Typography 
          className={classes.title}
          variant='body2' 
        >
        <sub>Please fill the form below, then click Create New Item</sub>
        </Typography>
      </Box>
      <div>&emsp;</div>
      <NewForm 
        addTransaction={addTransaction}
      />
    </>
  )
}

