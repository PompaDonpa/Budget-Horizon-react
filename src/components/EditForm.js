import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 4
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch'
  },
  date: {
    fontSize: 8,
    color: 'black'
  }
}))

const handleDateChange = event => {
  event.preventDefault()
  console.log('d')
}

const handleSubmit = event => {
  event.preventDefault()
  console.log('d')
}

const EditForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'white', height: '100%' }}
          className={classes.form}
        >
          <div>
            <TextField
              id='outlined-full-width'
              label='Transaction ID'
              style={{ margin: 0, padding: 10 }}
              placeholder='Description'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              variant='outlined'
              required
            />
          </div>
          <div>
            <div>&emsp;</div>
            <TextField
              type='number'
              id='outlined-full-width'
              label='Ammount'
              style={{ margin: 0, padding: 10 }}
              placeholder='$'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              variant='outlined'
              required
            />
          </div>
          <div>
            <div>&emsp;</div>
            <TextField
              id='outlined-full-width'
              label='From'
              style={{ margin: 0, padding: 10 }}
              placeholder='...'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              variant='outlined'
              required
            />
          </div>
          <div>
            <div>&emsp;</div>
            <TextField
              id='outlined-full-width'
              label='Flag'
              style={{ margin: 0, padding: 10 }}
              placeholder='Utility'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              variant='outlined'
              required
            />
          </div>
          <div>
            <div style={{ margin: 0, padding: 14 }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  orientation='landscape'
                  className={classes.date}
                  margin='normal'
                  id='date-picker'
                  label='Date'
                  format='MM/dd/yyyy'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  fullWidth
                  required
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
          <div style={{ margin: 0, padding: 14 }}>
            <Button type='submit' variant='outlined' color='primary' fullWidth>
              Make Changes
            </Button>
          </div>
        </form>
      </Container>
    </React.Fragment>
  )
}

export default EditForm
