import React,{ useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from './util/apiUrl'

import Nav from './components/Nav'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import NewTransaction from './pages/NewTransaction'
import TransactionID from './components/TransactionID'
import EditTransaction from './pages/EditTransaction'
import NotFound from './pages/NotFound'


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Configuration
const API_BASE = apiUrl()

const App = () => {

  const [ transactions, setTransactions ] = useState()

  useEffect(() => { 
    axios.get(`${API_BASE}/transactions`)
    .then((response) => { 
      const data = response
      setTransactions(data)
     })
   },[])


  return (
      <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/transactions'>
          <Transactions />
        </Route>
        <Route exact path='/transactions/new'>
          <NewTransaction />
        </Route>
        <Route exact path='/transactions/:id'>
          <TransactionID />
        </Route>
        <Route  path='transactions/:id/edit'>
          <EditTransaction />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  
  )
}

export default App
