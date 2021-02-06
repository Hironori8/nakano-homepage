import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from './Avatar.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  carrer: {
				display:'flex',
				margin:'auto',
				marginTop:20,
  },
  research: {
				display:'flex',
				margin:'auto',
				marginTop:20,
  },
  git: {
				display:'flex',
				margin:'auto',
				width: theme.spacing(30),
				height: theme.spacing(30),
  },
  twitter: {
				display:'flex',
				margin:'auto',
				width: theme.spacing(30),
				height: theme.spacing(30),
  },
  instagram: {
				display:'flex',
				margin:'auto',
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const MainPage = () =>{
  const classes = useStyles();

		return(
				<div className={classes.root}> 
					<AppBar/>
				 <Avatar/>
					<Link to='/pagecarrer'>
						<Button 
								variant="contained" 
								color="primary" 
								className={classes.carrer}
						>
							Carrer	
						</Button>
					</Link>
					<Link to='/pagereseach'>
						<Button 
								variant="contained" 
								color="primary" 
								className={classes.research}
						>
							Research	
						</Button>
					</Link>
				</div>
			);
};

export default MainPage;
