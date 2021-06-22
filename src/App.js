import React,{ useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import EditTransaction from './pages/EditTransaction'
import ShowTransaction from './pages/ShowTransaction'
import NewTransaction from './pages/NewTransaction'
import Transactions from './pages/Transactions'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import Home from './pages/Home'

import { apiUrl } from './util/apiUrl'
import axios from 'axios'


// Configuration
const API_BASE = apiUrl()


//  ================================
//            MAIN FUNCTION
//  ================================


export default function App (){
<<<<<<< HEAD
=======

  const [ transactions, setTransactions ] = useState([])
  const [ balanceUpdated, setBalanceUpdated ] = useState(0)
  const [ spentUpdated, setSpentUpdated ] = useState(0) 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195

  const [ transactions, setTransactions ] = useState([])
  const [ balanceUpdated, setBalanceUpdated ] = useState(0)
  const [ spentUpdated, setSpentUpdated ] = useState(0)
  const [ updatedBudget, setUpdatedBudget ] = useState(0)

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`)
<<<<<<< HEAD
      .then((response) => {
        const balancer = response.data.reduce((sum,obj)=>{return sum += obj.amount},0)
        const liability = response.data.reduce((neg,obj)=>{return neg += obj.amount < 0 ? obj.amount : 0},0)
        setBalanceUpdated(balancer)
        setSpentUpdated(liability)
=======
      .then((response) => { 
        let balancer = response.data.reduce((sum,obj)=>{return sum += obj.amount},0)
        let liability = response.data.reduce((neg,obj)=>{return neg += obj.amount < 0 ? obj.amount : 0},0)
        setBalanceUpdated(balancer)
        setSpentUpdated(liability) 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
        setTransactions(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
<<<<<<< HEAD
  })

  const addTransaction = (newTransaction) => {
    axios.post(`${API_BASE}/transactions`, newTransaction)
      .then((response) =>{
        return axios.get(`${API_BASE}/transactions`)
      })
      .then((response) => {
        setTransactions(response.data)
      })
      .catch((error) => {
        console.error(error)
    })
  }
=======
  },[])

  const addTransaction = (newTransaction) => { 

    axios.post(`${API_BASE}/transactions`, newTransaction)
      .then((response) =>{ 
        return axios.get(`${API_BASE}/transactions`)
      })
      .then((response) => { 
        setTransactions(response.data)
      })
      .catch((error) => { 
        console.error(error)
    })
  }

  const deleteTransaction = (id ) => { 
    
    axios.delete(`${API_BASE}/transactions/${id}`)
      .then((response) =>{ 
        const deletedObject = response.data
        let idx = -1
        if (deletedObject.length > 1 ){
          deletedObject.forEach( obj =>{ 
            transactions.forEach((item, index) =>{ 
              if (item.id === obj.id){
                idx = index
                transactions.splice(idx, 1)
                return
              }
             })
          } )
        }else if (deletedObject) { 
          transactions.forEach((item, index) =>{ 
            if (item.id === deletedObject.id){
              idx = index
              transactions.splice(idx, 1)
              return
            }
          })
        }
        setTransactions(transactions)
      })
      .catch((error) => { 
        console.error(error)
      })
   }

  const updateTransaction = (updatedTransaction) => { 

    const id = updatedTransaction.id

    axios.put(`${API_BASE}/transactions/${id}`, updatedTransaction)
      .then((response) =>{ 
        const updatedTransaction = response.data
        let idx = -1
        transactions.forEach((item, index)=>{ 
          if (item.id === updatedTransaction.id){ 
            idx = index
            return
          }
        })
        transactions.splice(idx,1,updatedTransaction)
        setTransactions(transactions)
      })
      .catch((error) => { 
        console.error(error)
      })
  }
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195

  const deleteTransaction = (id ) => {
    axios.delete(`${API_BASE}/transactions/${id}`)
      .then((response) =>{
        const deletedObjs = response.data
        const nextTransaction = transactions.filter(transaction => !deletedObjs.find(obj => transaction.id === obj.id))
        setTransactions(nextTransaction)
      })
      .catch((error) => {
        console.error(error)
      })
   }

  const updateTransaction = (updatedTransaction) => {

    const id = updatedTransaction.id

    axios.put(`${API_BASE}/transactions/${id}`, updatedTransaction)
      .then((response) =>{
        const editedTransaction = response.data
        const updatedTransaction = transactions.filter(transaction => !editedTransaction.find(edited => transaction.id === edited.id ))
        setTransactions(updatedTransaction)
      })
      .catch((error) => {
        console.error(error)
      })
  }

    const updateBudget = (budget) =>{
      setUpdatedBudget(budget)
    }

  return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/transactions/new'>
<<<<<<< HEAD
            <NewTransaction
=======
            <NewTransaction 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
              addTransaction={addTransaction}
            />
          </Route>
          <Route  path='/transactions/:id/edit'>
<<<<<<< HEAD
            <EditTransaction
              updateTransaction={updateTransaction}
=======
            <EditTransaction 
              updateTransaction={updateTransaction} 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
              deleteTransaction={deleteTransaction}
            />
          </Route>
          <Route  path='/transactions/:id'>
<<<<<<< HEAD
            <ShowTransaction
              transactions={transactions}
=======
            <ShowTransaction 
              transactions={transactions} 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
              deleteTransaction={deleteTransaction}
            />
          </Route>
          <Route  path='/transactions'>
<<<<<<< HEAD
            <Transactions
              transactions={transactions}
              deleteTransaction={deleteTransaction}
              balanceUpdated={balanceUpdated}
              spentUpdated={spentUpdated}
              updateBudget={updateBudget}
              updatedBudget={updatedBudget}
=======
            <Transactions 
              transactions={transactions} 
              deleteTransaction={deleteTransaction} 
              balanceUpdated={balanceUpdated} 
              spentUpdated={spentUpdated}
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
  )
}


