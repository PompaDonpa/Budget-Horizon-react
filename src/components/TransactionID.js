import { useParams, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'


import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


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

const TransactionID = ({ deleteTransaction }) => {

  const classes = useStyles()

  const [ transaction, setTransaction ] = useState({})
  let { id } = useParams()
  let history = useHistory()
  
  useEffect( ()=>{ 
    const API_BASE = apiUrl()
    axios.get(`${API_BASE}/transactions/${id}`)
    .then((response) =>{ 
      setTransaction(response.data)
     }).catch((error) =>{
       history.push("/not-found")
     })
<<<<<<< HEAD
   },[id, history, transaction])
=======
   },[id, history])
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195


  const handleDelete = () => {
    deleteTransaction(id)
    history.push("/transactions")
  }

  
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <form
          style={{ backgroundColor: 'white', borderRadius: 20 }}
        >
          <TextField
            id='transactionId'
            label='Transaction ID'
            style={{ margin: 0, padding: 10 }}
            value={transaction.transactionId}
            InputLabelProps={{shrink: true}}
            variant='outlined'
            fullWidth
            disabled
          />
          <TextField
            type='number'
            id='ammount'
            label='Ammount'
            style={{ margin: 0, padding: 10 }}
            value={transaction.amount}
            InputLabelProps={{shrink: true}}
            variant='outlined'
            fullWidth
            disabled
          />
          <TextField
            id='from'
            label='From'
            style={{ margin: 0, padding: 10 }}
            value={transaction.from}
            margin='normal'
            InputLabelProps={{shrink: true}}
            variant='outlined'
            fullWidth
            disabled
          />
          <TextField
            id='flag'
            label='Flag'
            style={{ margin: 0, padding: 10 }}
            value={transaction.flag}
            InputLabelProps={{shrink: true}}
            variant='outlined'
            fullWidth
            disabled
          />
          <TextField
            id='date'
            label='Date'
            style={{ margin: 0, padding: 10 }}
            value={transaction.date}
            InputLabelProps={{shrink: true}}
            variant='outlined'
            fullWidth
            disabled
          />
          <div className={classes.divEdit}>
            <Button 
              onClick={()=>{history.push(`/transactions/${id}/edit`)}} 
              variant='outlined' color='primary' 
              className={classes.buttonEdit} 
              type='Link'
            >
            Edit
            </Button>
            <Button 
              className={classes.buttonEdit} 
              onClick={handleDelete} 
              variant='outlined' 
              color='primary' 
              type='Link' 
            >
            Delete
            </Button>
          </div>

          <div style={{ margin: 0, padding: 14 }}>
            <Button 
              onClick={()=>history.push("/transactions")}
              variant='outlined' 
              color='primary' 
              type='Link' 
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

export default TransactionID
