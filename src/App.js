import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Transactions from './pages/Transactions'
import NewTransaction from './pages/NewTransaction'
import ShowTransaction from './pages/ShowTransaction'
import EditTransaction from './pages/EditTransaction'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route eact path='/transactions'>
          <Transactions />
        </Route>
        <Route path='/transactions/new'>
          <NewTransaction />
        </Route>
        <Route exact path='/transaction/:id'>
          <ShowTransaction />
        </Route>
        <Route exact path='transaction/:id/edit'>
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
