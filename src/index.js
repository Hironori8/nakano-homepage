import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {useSpring, animated,useTransition} from 'react-spring';
import './index.css';
import GitHubButton from 'react-github-btn';
import {Follow} from 'react-twitter-widgets';
import InstagramButton from  "react-instagram-button";
import MainPage from './MainPage.js';
import CarrerPage from './CarrerPage.js';
import ResearchPage from './ResearchPage.js';

const App = () => {
    return(
		<div>
			<BrowserRouter>
				<div>
				   <Route path='/' exact component={MainPage}/>
				   <Route path="/pagecarrer" component={CarrerPage}/>
				   <Route path="/pagereseach" component={ResearchPage}/>
				</div>
			</BrowserRouter>
		</div>
   );
};

ReactDOM.render(<App/>,document.getElementById('root'))
