import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import MainPage from './Component/MainPage.js';
import CarrerPage from './Component/CarrerPage.js';
import ResearchPage from './Component/ResearchPage.js';

const App = () => {
    return(
		<div>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div>
				   <Route path='/' exact component={MainPage}/>
				   <Route path="/carrer" component={CarrerPage}/>
				   <Route path="/research" component={ResearchPage}/>
				</div>
			</BrowserRouter>
		</div>
   );
};

ReactDOM.render(<App/>,document.getElementById('root'))
