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

  const [ transactions, setTransactions ] = useState([])
  const [ balanceUpdated, setBalanceUpdated ] = useState(0)
  const [ spentUpdated, setSpentUpdated ] = useState(0) 

  useEffect(() => { 
    axios.get(`${API_BASE}/transactions`)
      .then((response) => { 
        let balancer = response.data.reduce((sum,obj)=>{return sum += obj.amount},0)
        let liability = response.data.reduce((neg,obj)=>{return neg += obj.amount < 0 ? obj.amount : 0},0)
        setBalanceUpdated(balancer)
        setSpentUpdated(liability) 
        setTransactions(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
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


  return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/transactions/new'>
            <NewTransaction 
              addTransaction={addTransaction}
            />
          </Route>
          <Route  path='/transactions/:id/edit'>
            <EditTransaction 
              updateTransaction={updateTransaction} 
              deleteTransaction={deleteTransaction}
            />
          </Route>
          <Route  path='/transactions/:id'>
            <ShowTransaction 
              transactions={transactions} 
              deleteTransaction={deleteTransaction}
            />
          </Route>
          <Route  path='/transactions'>
            <Transactions 
              transactions={transactions} 
              deleteTransaction={deleteTransaction} 
              balanceUpdated={balanceUpdated} 
              spentUpdated={spentUpdated}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
  )
}


