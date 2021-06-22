import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


import TransactionID from '../components/TransactionID'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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


export default function ShowTransaction ({ transactions, deleteTransaction }){

  const classes = useStyles()
  
  let { idx } = useParams()
  const [ transaction ] = useState(transactions[idx])


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
        Transaction
        </Typography>
        <Typography 
          className={classes.title}
          variant='body2' 
        >
        <sub>This is read only, to modify click Edit</sub>
        </Typography>
      </Box>
      <div>&emsp;</div>
      <TransactionID 
        transaction={transaction} 
        deleteTransaction={deleteTransaction}
      />
    </>
  )
}


