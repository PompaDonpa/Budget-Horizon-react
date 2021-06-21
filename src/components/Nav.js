import React from 'react'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Storage';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { SCOPABLE_TYPES } from '@babel/types';


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

const Nav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  return (
    <>
      <CssBaseline />
      <Box boxShadow={1}>
      <Container component='div' className={classes.container} >
      <Box boxShadow={0}>   
      <img src='../../BudgetPet.png' className={classes.card}/>   

        </Box>
            {/* <Chip label="Budget Horizon" variant="outlined" className={classes.chip}/> */}
        <Typography variant="h4" className={classes.main}>Budget Horizon</Typography>

        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          className={classes.navigation}
        >
          <Link to='/'>
                <BottomNavigationAction label='Home' icon={<HomeIcon className={classes.icon} />} />
          </Link>
          <Link to='/transactions'>
          <BottomNavigationAction label='Transactions' icon={<StorageIcon  className={classes.icon} />} />
          </Link>
          <Link to='/transactions/new'>
          <BottomNavigationAction label='New' icon={<AddCircleIcon  className={classes.icon} />} />
          </Link>
        </BottomNavigation>
      </Container>
      </Box>
    </>
  )
}

export default Nav
