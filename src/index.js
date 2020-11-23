import React, { useRef, useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {useSpring, animated,useTransition} from 'react-spring'
import './index.css'
import GitHubButton from 'react-github-btn'
import {Follow} from 'react-twitter-widgets'
import InstagramButton from  "react-instagram-button";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 100, friction: 200 } }))
	return (
		<animated.div
			className="card"
			onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.interpolate(trans) }}
		/>
	);
};

const BackAnimation = () => {
	const ref = useRef([])
	const [items, set] = useState([])
	const transitions = useTransition(items, null, {
	from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
		enter: [
			{ opacity: 0.3, height: 300, innerHeight: 200 },
			{ transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
			{ transform: 'perspective(600px) rotateX(0deg)' },
		],
		leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
		update: { color: '#28b4d7' },
	})

	const reset = useCallback(() => {
		ref.current.map(clearTimeout)
		ref.current = []
		set([])
		ref.current.push(setTimeout(() => set(['Create Society','Realize Its Potencial','Lead Plus World']), 2000))
		ref.current.push(setTimeout(() => set(['Create Society','Realize Its Potencial','Lead Plus World']), 5000))
		ref.current.push(setTimeout(() => set(['Create Society','Realize Its Potencial','Lead Plus World']), 8000))
	}, [])

	useEffect(() => void reset(), [])

	return (
		<div>
			{transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
				<animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
				<animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
				</animated.div>
			))}
		</div>
	);
};

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

const MainPage = () =>{
	return(
		<div className='MainPage'> 
			<h1>Hironori Nakano</h1>
			<div className='backanime'>
			<BackAnimation/>
			</div>
			<div className='wrapper'>
				<Card/>
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
