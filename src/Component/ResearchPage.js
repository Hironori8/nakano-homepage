import React from 'react';
import {Link} from 'react-router-dom';
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

const ResearchPage = () =>{
		const classes = useStyles();
		return(
				<div className={classes.root}> 
				 <AppBar/>
					<h1>Research</h1>
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

export default ResearchPage;
