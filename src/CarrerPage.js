import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  carrer: {
    marginRight: 20,
  },
  research: {
    marginLeft: 20,
  },
  list: {
    marginLeft: 50,
  },
  linkbutton: {
    marginTop: 50,
  },
}));

const CarrerPage = () =>{
  const classes = useStyles();

		return(
				<div className='CarrerPage'> 
				<AppBar/>
				<h1>Carrer</h1>
					<div className='wrapper'>
						<div className='list'>
							<Link to='/'>
								<Button variant="contained" color="primary" className={classes.research}>
									Main	
								</Button>
							</Link>
						</div>
					</div>
				</div>
	);
};

export default CarrerPage;
