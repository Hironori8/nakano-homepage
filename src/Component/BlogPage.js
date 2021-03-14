import React from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import {useSelector, useDispatch,shallowEqual} from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import AppBar from './AppBar.js';
import Switch from './Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  blog: {
    marginLeft: 50,
    marginTop: 50,
  },
  icon: {
    marginBottom: -20,
    marginLeft: 20,
				fontSize:100
  },
}));

const Eng = () =>{
		const selectIsEng = (state) => state.isEng;
		return useSelector(selectIsEng,shallowEqual);
}

export default function BlogPage(){
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
						return "Blog";
				}else{
						return "ブログ";
				}
		};
		const handleButton = (isEng) => {
				if(isEng){
						return "Main";
				}else{
						return "メインページへ戻る";
				}
		};

		return(
				<div className={classes.root}> 
				<AppBar pagename='Blog'/>
				<Switch isEng={isEng}/>
				<animated.h1 style={spring}>{handleTitle(isEng)}<SpeakerNotes className={classes.icon}/></animated.h1>
						<div className='list'>
							<Link to='/'>
								<Button variant="outlined" color="primary" className={classes.blog}>
										{handleButton(isEng)}
								</Button>
							</Link>
						</div>
				</div>
	);
};

