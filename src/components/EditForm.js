import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'


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
  divEdit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonEdit: {
    width: '40%',
    margin: 5
  },
}))


//  ================================
//            MAIN FUNCTION
//  ================================

export default function EditForm ({ updateTransaction, deleteTransaction }) {

  
  const classes = useStyles()

  let { id } = useParams()
  let history = useHistory()
  
  const [newTransaction, setNewTransaction] = useState({
    transactionId: '',
    amount: 0,
    from: '',
    flag: '',
    date: new Date().toLocaleDateString(),
    id: id
  })

  useEffect( ()=>{ 
    const API_BASE = apiUrl()
    axios.get(`${API_BASE}/transactions/${id}`)
    .then((response) =>{ 
      setNewTransaction(response.data)
     }).catch((error) =>{
       console.log(error)
       history.push("/not-found")
     })
   },[id, history])


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

  const handleDelete = () => {
    deleteTransaction(id)
    history.push("/transactions")
  }

  const handleUpdate =() => {
    updateTransaction(newTransaction,id)
    history.push("/transactions")
  }
  
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <form
          style={{ backgroundColor: 'white', borderRadius: 20 }}
          onSubmit={handleUpdate}
        >
          <TextField
            placeholder={newTransaction.transactionId}
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            onChange={handleTextChange}
            label='Transaction ID'
            variant='outlined'
            id='transactionId'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            placeholder={newTransaction.amount}
            InputLabelProps={{shrink: true}}
            onChange={handleAmountChange}
            variant='outlined'
            label='Amount'
            type='number'
            id='amount'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            placeholder={newTransaction.from}
            onChange={handleTextChange}
            variant='outlined'
            margin='normal'
            label='From'
            id='from'
            fullWidth
            required
          />
          <TextField
            style={{ margin: 0, padding: 10 }}
            InputLabelProps={{shrink: true}}
            placeholder={newTransaction.flag}
            onChange={handleTextChange}
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
                placeholder={newTransaction.date}
                onChange={handleDateChange}
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
          <div className={classes.divEdit}>
            <Button 
              className={classes.buttonEdit}
              variant='outlined' 
              color='primary' 
              type='submit' 
            >
            Update
            </Button>
            <Button 
              className={classes.buttonEdit}
              onClick={handleDelete} 
              variant='outlined' 
              color='primary' 
              type='link' 
            >
            Delete
            </Button>
          </div>
          <div style={{ margin: 0, padding: 14 }}>
            <Button 
              onClick={()=>history.push("/transactions")}
              variant='outlined' 
              color='primary' 
              type='link' 
              fullWidth
              >
            Back
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}

