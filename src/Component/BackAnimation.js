import React, { useRef, useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {useSpring, animated,useTransition} from 'react-spring'
import './index.css'

export default function BackAnimation(){
	const ref = useRef([])
	// refは値を保持し続ける
	const [items, set] = useState([])
	// itemには空のリストが格納、set関数はitemを更新するために使用
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

