import React from 'react'
import Budget from '../components/Budget'
import Table from '../components/Table'


export default function Transactions ({ transactions, deleteTransaction, balanceUpdated, spentUpdated, updateBudget, updatedBudget }){

  return (
    <>
      <Budget 
        balanceUpdated={balanceUpdated} 
        spentUpdated={spentUpdated}
        updateBudget={updateBudget}
        updatedBudget={updatedBudget}
      />
      <div>&emsp;</div>
      <Table
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
    </>
  )
}


