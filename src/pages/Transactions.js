import React from 'react'
import Table from '../components/Table'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    margin:6,
    color: '#094067',
    textTransform: 'capitalize',
    fontSize: 16,
  }
}))

const Transactions = () => {
  const classes = useStyles()
  return (
    <>
      <Box boxShadow={3} className={classes.box}>
        <ButtonGroup
            variant="text"
          size='large'
          
          aria-label='large contained button group'
        >
                
          <Button  color='primary' className={classes.title}>
            Budget
          </Button>
          <Button   color='primary' className={classes.title}>
            Balance
          </Button>

          <Button color='secondary' className={classes.title}>
            Spent
          </Button>

        </ButtonGroup>
      </Box>
      <div>Balance</div>
      <Table />
    </>
  )
}

export default Transactions
