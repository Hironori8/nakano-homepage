import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Icon from './mypicture.jpg'
import './index.css'
import GitHubButton from 'react-github-btn'
// import ReactTwitterFollowButton from 'react-twitter-follow-button';
import {Follow} from 'react-twitter-widgets'
import InstagramButton from  "react-instagram-button";


const LinkButton = () =>{
	return(
		<div className='link-list'>
			<div className='link-list-0'>
				<GitHubButton className='github-button' 
					href="https://github.com/Hironori8" 
					data-size="large" 
					aria-label="Follow @Hironori8 on GitHub">
					Follow @Hironori8
				</GitHubButton>

			</div>
			<div className='link-list-0'>
				<Follow username='nori_nori_8'/>
			</div>
			<div className='link-list-1'>
				<InstagramButton 
					username={"noriduckbasket12"} />
			</div>
		</ div>

	);
};

const Picture = () => {
	return(
		<div className='mypicture'>
			<img src={Icon}/>
		</div>
	);
};

const MainPage = () =>{
	return(
		<div className='MainPage'> 
			<h1>Hironori Nakano</h1>
			<div className='wrapper'>
				<Picture/>
				<div className='list'>
					<Link to='/pagecarrer'>
						<button className="btn-sf-like">Carrer</button>
					</Link>
					<Link to='/pagereseach'>
					<button className="btn-sf-like">Research</button>
					</Link>
					<LinkButton />
				</div>
			</div>
		</div>
	);
};

const CarrerPage = () =>{
	return(
		<div className='CarrerPage'> 
			<h1>Carrer</h1>
			<div className='wrapper'>
				<div className='list'>
					<Link to='/'>
					<button className="btn-sf-like">Main</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const ResearchPage = () =>{
	return(
		<div className='ResearchPage'> 
			<h1>Research</h1>
			<div className='wrapper'>
				<div className='list'>
					<Link to='/'>
					<button className="btn-sf-like">Main</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

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
