import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import '../index.css';
import MainPage from './MainPage';
import CarrerPage from './CarrerPage';
import ResearchPage from './ResearchPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';

export default function App(props){
		return(
				<div>
					<BrowserRouter basename={process.env.PUBLIC_URL}>
						<div>
									<Route path='/' exact component={MainPage}/>
									<Route path="/carrer" component={CarrerPage}/>
									<Route path="/research" component={ResearchPage}/>
									<Route path="/blog" component={BlogPage}/>
									<Route path="/contact" component={ContactPage}/>
						</div>
					</BrowserRouter>
				</div>
			);
};
