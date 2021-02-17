import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import MediaCard from './MediaCard.js';
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
    marginLeft: 50,
    marginTop: 50,
  },
  list: {
    marginTop: 0,
  },
  linkbutton: {
    marginTop: 50,
  },
  cards: {
				display:'flex',
  },
}));

const CarrerPage = () =>{
  const classes = useStyles();

		return(
				<div className='CarrerPage'> 
				<AppBar/>
				<h1>経歴 Carrer</h1>
				<div className={classes.cards}>
				<MediaCard name='開智高校 (2011-2014)' />
				<MediaCard name='慶應大学 (2015-2019)' />
				<MediaCard name='慶應大学院 (2019-2021)' />
				</div>
						<div className='list'>
							<Link to='/'>
								<Button variant="contained" color="primary" className={classes.research}>
									Main	
								</Button>
							</Link>
						</div>
				</div>
	);
};

export default CarrerPage;
