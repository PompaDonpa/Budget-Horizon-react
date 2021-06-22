import React from 'react'
import { Link } from 'react-router-dom'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@material-ui/core/BottomNavigation'
<<<<<<< HEAD
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import StorageIcon from '@material-ui/icons/Storage'
import Container from '@material-ui/core/Container'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/Home'
import Box from '@material-ui/core/Box'
=======
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import StorageIcon from '@material-ui/icons/Storage';
import Container from '@material-ui/core/Container'
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195


const useStyles = makeStyles({
  container:{
    backgroundColor: '#90b4ce',
    height: '20vh',
    width: 'auto',
    display: 'flex',
    flexDirection: 'flex-column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },  
  navigation: {
    backgroundColor: '#90b4ce',
    width: '50%',
    height: '90%',
  },
  card:{
    width: '100px',
    height: '90px',
    transform: 'scale(0.8)',
    backgroundColor: '#90b4ce',
},
main:{
    height: '50%',
    userSelect: 'none',
    color: '#094067'
},
icon:{
     color: '#2d334a',
     fontSize: 30,
}
})

//  ================================
//            MAIN FUNCTION
//  ================================


export default function Nav () {

  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <>
    <CssBaseline />
    <Box boxShadow={1}>
      <Container 
          className={classes.container}
          component='div' 
      >
      <Box boxShadow={0}>   
        <img 
          src='../../BudgetPet.png'
          className={classes.card} 
          alt="BudgetPet"
        />   
      </Box>

      <Typography 
        className={classes.main}
        variant="h4" 
      >
      Budget Horizon
      </Typography>

      <BottomNavigation
        onChange={(event, newValue) => {setValue(newValue)}}
        className={classes.navigation}
        value={value}
      >
        <Link to='/'>
          <BottomNavigationAction 
<<<<<<< HEAD
            icon={<Tooltip title='Index'><HomeIcon className={classes.icon}/></Tooltip>} 
=======
            icon={<HomeIcon className={classes.icon} />} 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
            label='Home' 
          />
        </Link>
        <Link to='/transactions'>
          <BottomNavigationAction 
<<<<<<< HEAD
            icon={<Tooltip title='Transactions'><StorageIcon  className={classes.icon}/></Tooltip>}
=======
            icon={<StorageIcon  className={classes.icon} />}
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
            label='Transactions' 
          />
        </Link>
        <Link to='/transactions/new'>
          <BottomNavigationAction 
<<<<<<< HEAD
            icon={<Tooltip title='New Transaction'><AddCircleIcon  className={classes.icon}/></Tooltip>} 
=======
            icon={<AddCircleIcon  className={classes.icon} />} 
>>>>>>> 6969fd1b4d6d4960e71e3b7afa31d83e7c6d1195
            label='New' 
          />
        </Link>
      </BottomNavigation>
     </Container>
    </Box>
    </>
  )
}

