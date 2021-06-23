import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { green, red, amber} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SwipeableViews from 'react-swipeable-views';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Zoom from '@material-ui/core/Zoom';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import clsx from 'clsx';


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100vw',
      position: 'relative',
      maxHeight: '110px',
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(2),
      maxHeight: 5,
      maxWidth: 34

    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      }, 
    },
    fabRed: {
        color: theme.palette.common.white,
        backgroundColor: red[700],
        '&:hover': {
          backgroundColor: red[600],
        },
    }, 
    fabAmber: {
        color: theme.palette.common.white,
        backgroundColor: amber[300],
        '&:hover': {
          backgroundColor: amber[600],
        },
    },
    number: {
        position: 'relative',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        bottom: theme.spacing(6),
        left: theme.spacing(70),
        width: '24ch',
      },
  }));


//  ================================
//            MAIN FUNCTION
//  ================================


export default function Budget ( {  balanceUpdated, spentUpdated, updateBudget, updatedBudget } ) {

    const classes = useStyles()
    const theme = useTheme();

    const [ prevBudget, setPrevBudget ] = useState()
    const [ budget, setBudget ] = useState(updatedBudget); 
    const [ value, setValue ] = useState(0); 

    const submitUserBudget = event =>{
        setPrevBudget(0)
        setValue(0)
        setBudget(parseFloat(event.target.value))
        updateBudget(event.target.value)
    }
  
    const handleBudgetChange =e =>{
        setPrevBudget(e.target.value)
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
  
    const fabs = [
      {
        color: 'primary',  
        className: clsx(classes.fab, classes.fabGreen),
        icon: <MonetizationOnIcon />,
        label: 'Add',
      },
      {
        color: 'secondary',
        className: clsx(classes.fab, classes.fabAmber),
        icon: <EditIcon />,
        label: 'Edit',
      },
      {
        color: 'inherit',
        className: clsx(classes.fab, classes.fabRed),
        icon: <MonetizationOnIcon />,
        label: 'Expand',
      },
    ];
  
  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Balance" {...a11yProps(0)} />
            <Tab label="Budget" {...a11yProps(1)} />
            <Tab label="Spent" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >

        <TabPanel value={value} index={0} dir={theme.direction} style={{fontSize: 24, backgroundColor: balanceUpdated > 0 ? `${green[100]}` : `${red[100]}`}}>
          {parseFloat(balanceUpdated).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} style={{fontSize: 24}}>
          {parseFloat(budget).toLocaleString('en-US', {style: 'currency',currency: 'USD'}) }
          
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              type="number"
              onChange={handleBudgetChange} 
              value={prevBudget}
              className={classes.number} 
              id="user-budget" 
              label="Update Budget"
              helperText="Enter to submit" 
              onKeyPress={(e) => e.key === 'Enter' && submitUserBudget(e)}
            />
            </form>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction} style={{fontSize: 24, backgroundColor: `${amber[200]}`}}>
          {parseFloat(spentUpdated).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}
        </TabPanel>

        </SwipeableViews>
        {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,}}
          unmountOnExit
          >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
        ))}
      </div>
    );
}
