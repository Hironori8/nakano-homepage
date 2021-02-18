import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar.js';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard.js';
import {useSpring, animated,config} from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: 50,
  },
  cards: {
				display:'flex',
  },
  list: {
    marginTop: 50,
    marginLeft: 80,
  },
}));

const ResearchPage = () =>{
		const classes = useStyles();
		const spring = useSpring({
				opacity:1,
				from:{opacity:0},
				delay:500,
		});
		return(
				<div className={classes.root}> 
						<AppBar/>
						<animated.h1 style={spring}>研究テーマ Research</animated.h1>
						<div className={classes.cards}>
								<MediaCard name='NDN (Named Data Networking)' image="NDN.jpg"/>
								<MediaCard name='Android Malware and  Adversarial Examples' image="Android.jpg"/>
						</div>
						<div className={classes.list}>
								<Link to='/'> 
										<Button variant="contained" color="primary" className={classes.research}>
												メインページに戻る（Main Page)	
										</Button>
								</Link>
						</div>
				</div>
		);
		};

export default ResearchPage;
