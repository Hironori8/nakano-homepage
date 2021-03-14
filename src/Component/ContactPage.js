import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch,shallowEqual} from "react-redux";
import {useSpring, animated} from 'react-spring';
import Switch from './Switch';

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

const Eng = () =>{
		const selectIsEng = (state) => state.isEng;
		return useSelector(selectIsEng,shallowEqual);
}

export default function AccessPage(){
  const classes = useStyles();
		const spring = useSpring({
				opacity:1,
				from:{opacity:0},
				delay:500,
		});
		const isEng = Eng();
		const dispatch = useDispatch();
		const handleTitle = (isEng) => {
				if(isEng){
						return "Contact";
				}else{
						return "連絡";
				}
		};

		return(
				<div className={classes.root}> 
				<AppBar pagename='Contact'/>
				<Switch isEng={isEng}/>
				<animated.h1 style={spring}>{handleTitle(isEng)}</animated.h1>
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

