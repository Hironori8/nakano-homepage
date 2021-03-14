import React from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import {useSelector, useDispatch,shallowEqual} from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AppBar from './AppBar.js';
import Switch from './Switch';
import MediaCard from './MediaCard.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: 50,
  },
  cards: {
				display:'flex',
				margin:100,
  },
  list: {
    marginTop: 50,
    marginLeft: 80,
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

export default function ResearchPage(){
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
						return "Research";
				}else{
						return "研究";
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
						<AppBar pagename='Research'/>
						<Switch isEng={isEng}/>
						<animated.h1 style={spring}>{handleTitle(isEng)}<LaptopMacIcon className={classes.icon}/></animated.h1>
						<div className={classes.cards}>
								<MediaCard name='NDN (Named Data Networking)' image="NDN.jpg"/>
								<MediaCard name='Android Malware' image="Android.jpg"/>
						</div>
						<div className={classes.list}>
								<Link to='/'> 
										<Button variant="outlined" color="primary" className={classes.research}>
												{handleButton(isEng)}
										</Button>
								</Link>
						</div>
				</div>
		);
};

