import React from 'react'
import Budget from '../components/Budget'
import Table from '../components/Table'


export default function Transactions ({ transactions, deleteTransaction, balanceUpdated, spentUpdated }){

  return (
    <>
      <Budget 
        balanceUpdated={balanceUpdated} 
        spentUpdated={spentUpdated}
      />
      <div>&emsp;</div>
      <Table
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
    </>
  )
}


