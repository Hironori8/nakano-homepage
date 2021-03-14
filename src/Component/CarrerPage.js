import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch,shallowEqual} from "react-redux";
import {useSpring, animated} from 'react-spring';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import AppBar from './AppBar.js';
import Stepper from './VerticalStepper.js';
import Switch from './Switch';

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
  icon: {
    marginBottom: -20,
    marginLeft: 20,
				fontSize:100
  },
  list: {
    marginTop: 0,
  },
  linkbutton: {
    marginTop: 50,
  },
}));

const Eng = () =>{
		const selectIsEng = (state) => state.isEng;
		return useSelector(selectIsEng,shallowEqual);
}
export default function CarrerPage(){
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
						return "Carrer";
				}else{
						return "経歴";
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
				<div className='CarrerPage'> 
				<AppBar pagename='Carrer'/>
				<Switch isEng={isEng}/>
				<animated.h1 style={spring}>{handleTitle(isEng)}<HistoryIcon className={classes.icon}/></animated.h1>
						<Stepper isEng={isEng}/>
						<div className='list'>
							<Link to='/'>
								<Button variant="outlined" color="primary" className={classes.research}>
										{handleButton(isEng)}
								</Button>
							</Link>
						</div>
				</div>
	);
};

