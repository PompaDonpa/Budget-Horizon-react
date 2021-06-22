import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch'
  },
  date: {
    fontSize: 8,
    color: 'black'
  },
}))


//  ================================
//            MAIN FUNCTION
//  ================================


export default function NewForm ({addTransaction}) {

  let history = useHistory()
  const classes = useStyles()
  const [newTransaction, setNewTransaction] = useState({
    transactionId: '',
    amount: 0,
    from: '',
    flag: '',
    date: new Date().toLocaleDateString(),
    id : uuid()
  })

  const handleDateChange = event => {
    let date = event.toLocaleDateString()
    setNewTransaction({ ...newTransaction, date })
  }

  const handleAmountChange = event => {
    let amount = parseInt(event.target.value)
    setNewTransaction({ ...newTransaction, amount })
  }

  const handleTextChange = event => {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTransaction(newTransaction)
    history.push('/transactions')
  }

  return (
    <>
    <CssBaseline />
      <Container maxWidth='sm'>
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'white', borderRadius: 20 }}
        >
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            onChange={handleTextChange}
            placeholder='Description'
            label='Transaction ID'
            variant='outlined'
            id='transactionId'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            onChange={handleAmountChange}
            variant='outlined'
            placeholder='$'
            label='Amount'
            type='number'
            id='amount'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            onChange={handleTextChange}
            variant='outlined'
            placeholder='...'
            margin='normal'
            label='From'
            id='from'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            onChange={handleTextChange}
            placeholder='Utility'
            variant='outlined'
            label='Flag'
            id='flag'
            fullWidth
            required
          />
          <div style={{ margin: 0, padding: 14 }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                KeyboardButtonProps={{'aria-label': 'change date'}}
                onChange={handleDateChange}
                value={newTransaction.date}
                className={classes.date}
                orientation='landscape'
                format='MM/dd/yyyy'
                label='Date'
                id='date'
                fullWidth
                required
              />
            </MuiPickersUtilsProvider>
          </div>
          <div style={{ margin: 0, padding: 14 }}>
            <Button 
              variant='outlined' 
              color='primary' 
              type='submit' 
              fullWidth
            >
            Create New Item
            </Button>
            <div>&emsp;</div>
            <Button
              onClick={()=>{history.push("/transactions")}} 
              variant='outlined' 
              color='primary' 
              type='button' 
              fullWidth
            >
            Cancel
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}

