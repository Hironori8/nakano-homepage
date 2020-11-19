import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './mypicture.jpg'
import './index.css'
import GitHubButton from 'react-github-btn'
import ReactTwitterFollowButton from 'react-twitter-follow-button';
import InstagramButton from  "react-instagram-button";

function LinkButton(){
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
				<ReactTwitterFollowButton 
					twitterAccount='nori_nori_8' 
					showLarge={true} 
					showName={true} 
					showCount={false} />
			</div>
			<div className='link-list-1'>
				<InstagramButton 
					username={"noriduckbasket12"} />
			</div>
		</ div>

	);
}

function Picture(){
	return(
		<div className='mypicture'>
			<img src={Icon}/>
		</div>
	);
}

class MainPage extends React.Component {
	render(){
		return(
			<div className='MainPage'> 
				<h1>Hironori Nakano</h1>
				<div className='wrapper'>
					<Picture/>
					<div className='list'>
						<a href="#" className="btn-sf-like">Carrer</a>
						<a href="#" className="btn-sf-like">Research</a>
						<LinkButton />
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<MainPage />,document.getElementById('root'))
