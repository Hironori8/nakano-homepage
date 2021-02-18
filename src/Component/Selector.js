import React from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import range from 'lodash-es/range'
import {Link} from 'react-router-dom';

const items = range(4)
const print_items = ['Carrer','Research','Blog','Access']
const url_items = ['/carrer','/research','/blog','/access']
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const useStyles = makeStyles((theme) => ({
		script_bf_box : {
				width: 100,
				height: 300,
				margin: 'auto',
				willChange: "transform",
				fontSize:50,
				writingMode:"vertical-rl",
				background:"white",
				color:'black',
				'&:hover':{
						background:"Black",
						color:'white',
				},
		},
}));

export default function Selector() {
  const classes = useStyles();
  const { radians } = useSpring({
		    to: async next => {
						      while (1) await next({ radians: 2 * Math.PI })
						    },
		    from: { radians: 0 },
		    config: { duration: 3500 },
		    reset: true,
		  })
  return items.map(i => 
				<Link to={url_items[i]}>
						<animated.div 
								key={i} 
								className={classes.script_bf_box} 
								style={{ transform: radians.interpolate(interp(i)) }} 
						>
								{print_items[i]}
						</animated.div>
				</Link>
		)
}

