import React from 'react'
import EditForm from '../components/EditForm'

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


export default function EditTransaction ({ updateTransaction, deleteTransaction }){

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
        Edit Transaction
        </Typography>
        <Typography 
          className={classes.title}
          variant='body2' 
        >
        <sub>Please fill out the form and click Update to Submit</sub>
        </Typography>
      </Box>
      <div>&emsp;</div>
      <EditForm 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction}
      />
    </>
  )
}


