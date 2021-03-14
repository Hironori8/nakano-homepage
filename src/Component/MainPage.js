import React from 'react';
import AppBar from './AppBar.js';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from './Avatar.js';
import Selector from './Selector.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
		selector:{
				display:'flex',
				marginTop:50,
				margin:'auto',
				maxWidth: 400,
		},
		button:{
				width:200,
				height:100,
		},
}));


const Eng = () =>{
		const selectIsEng = (state) => state.isEng;
		return useSelector(selectIsEng,shallowEqual);
}

const MainPage = () => {

  const classes = useStyles();


		return (
				<div className={classes.root}> 
					<AppBar />
					<Avatar />
				<div className={classes.selector}>
						<Selector key="selectorPage"/>
				</div>
				</div>
			);
}
export default MainPage


