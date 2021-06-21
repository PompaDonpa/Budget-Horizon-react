import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
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

const NewForm = ({addTransaction}) => {
  let history = useHistory()
  const classes = useStyles()
  const [newTransaction, setNewTransaction] = useState({
    transactionId: '',
    ammount: 0,
    from: '',
    flag: '',
    date: new Date()
  })

  const handleDateChange = event => {
    let date = event.toLocaleDateString()
    setNewTransaction({ ...newTransaction, date })
  }

  const handleTextChange = event => {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(newTransaction)
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
            id='transactionId'
            label='Transaction ID'
            style={{ margin: 0, padding: 10 }}
            placeholder='Description'
            InputLabelProps={{shrink: true}}
            variant='outlined'
            onChange={handleTextChange}
            fullWidth
            required
          />
          <TextField
            type='number'
            id='ammount'
            label='Ammount'
            style={{ margin: 0, padding: 10 }}
            placeholder='$'
            InputLabelProps={{shrink: true}}
            variant='outlined'
            onChange={handleTextChange}
            fullWidth
            required
          />
          <TextField
            id='from'
            label='From'
            style={{ margin: 0, padding: 10 }}
            placeholder='...'
            margin='normal'
            InputLabelProps={{shrink: true}}
            variant='outlined'
            onChange={handleTextChange}
            fullWidth
            required
          />
          <TextField
            id='flag'
            label='Flag'
            style={{ margin: 0, padding: 10 }}
            placeholder='Utility'
            InputLabelProps={{shrink: true}}
            variant='outlined'
            onChange={handleTextChange}
            fullWidth
            required
          />
          <div style={{ margin: 0, padding: 14 }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                orientation='landscape'
                className={classes.date}
                id='date'
                label='Date'
                format='MM/dd/yyyy'
                value={newTransaction.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{'aria-label': 'change date'}}
                fullWidth
                required
              />
            </MuiPickersUtilsProvider>
          </div>
          <div style={{ margin: 0, padding: 14 }}>
            <Button type='submit' variant='outlined' color='primary' fullWidth>
              Create New Item
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default NewForm
