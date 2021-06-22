import React from 'react'
import Budget from '../components/Budget'
import Table from '../components/Table'


<<<<<<< HEAD
export default function Transactions ({ transactions, deleteTransaction, balanceUpdated, spentUpdated, updateBudget, updatedBudget }){
=======
export default function Transactions ({ transactions, deleteTransaction, balanceUpdated, spentUpdated }){
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195

  return (
    <>
      <Budget 
        balanceUpdated={balanceUpdated} 
        spentUpdated={spentUpdated}
<<<<<<< HEAD
        updateBudget={updateBudget}
        updatedBudget={updatedBudget}
=======
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
      />
      <div>&emsp;</div>
      <Table
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
    </>
  )
}


