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
  access: {
    marginLeft: 50,
    marginTop: 50,
  },
  list: {
    marginTop: 0,
  },
}));

export default function AccessPage(){
  const classes = useStyles();
		const spring = useSpring({
				opacity:1,
				from:{opacity:0},
				delay:500,
		});

		return(
				<div className={classes.root}> 
				<AppBar pagename='Contact'/>
				<animated.h1 style={spring}>連絡 Contact</animated.h1>
						<div className='list'>
							<Link to='/'>
								<Button variant="contained" color="primary" className={classes.access}>
									メインページへ戻る（Main)	
								</Button>
							</Link>
						</div>
				</div>
	);
};

