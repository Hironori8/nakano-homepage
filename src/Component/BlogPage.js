import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import { makeStyles } from '@material-ui/core/styles';
import {useSpring, animated} from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  blog: {
    marginLeft: 50,
    marginTop: 50,
  },
}));

export default function BlogPage(){
  const classes = useStyles();
		const spring = useSpring({
				opacity:1,
				from:{opacity:0},
				delay:500,
		});

		return(
				<div className={classes.root}> 
				<AppBar pagename='Blog'/>
				<animated.h1 style={spring}>Blog ブログ</animated.h1>
						<div className='list'>
							<Link to='/'>
								<Button variant="contained" color="primary" className={classes.blog}>
									メインページへ戻る（MAIN)	
								</Button>
							</Link>
						</div>
				</div>
	);
};

