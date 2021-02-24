import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import Stepper from './VerticalStepper.js';
import { makeStyles } from '@material-ui/core/styles';
import {useSpring, animated} from 'react-spring';

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
}));

export default function CarrerPage(){
  const classes = useStyles();
		const spring = useSpring({
				opacity:1,
				from:{opacity:0},
				delay:500,
		});

		return(
				<div className='CarrerPage'> 
				<AppBar pagename='Carrer'/>
				<animated.h1 style={spring}>経歴 Carrer</animated.h1>
						<Stepper/>
						<div className='list'>
							<Link to='/'>
								<Button variant="outlined" color="primary" className={classes.research}>
									メインページへ戻る (Main)	
								</Button>
							</Link>
						</div>
				</div>
	);
};

