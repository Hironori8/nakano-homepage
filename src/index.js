import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './todo.js'
import Icon from './mypicture.jpg'
import BackGround from './background.mp4'
import './index.css'

class MainPage extends React.Component {
	render(){
		return(
			<html>
				<head>
					<title>nakano</title>
				</head>
				<body>
					<div className='MainPage'> <h1>Hironori Nakano</h1>
						<div className='mypicture'>
							<img src={Icon}/>
						</div>
						<div className='list'>
								<a href="#" className="btn-sf-like">Carrer</a>
								<a href="#" className="btn-sf-like">Research</a>
						</div>
					</div>
				</body>
			</html>
		)
	}
}

ReactDOM.render(<MainPage />,document.getElementById('root'))
// ReactDOM.render(<Todo />, document.getElementById('root'));
