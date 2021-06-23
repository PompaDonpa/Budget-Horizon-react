import React from 'react'
import Budget from '../components/Budget'
import EnhancedTable from '../components/EnhancedTable'


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
      <EnhancedTable
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
    </>
  )
}


