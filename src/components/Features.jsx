import React from 'react'
import { animated, useSpring } from '@react-spring/web'

const Number = ({ n }) => {
    const {number} = useSpring({
        from: { number : 0},
        number : n,
        delay : 5000,
        config: {mass:1, tension:20, friction: 10},
    });
    return <animated.div style={{fontSize: '2.25rem', fontWeight: '600'}}>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const Features = () => {
      
  return (
    <div className='features-section'>
        <div className='features'>
            <div className='feature'>
                <span>Lorem ipsum</span>
                <span><Number n={6500}/>+</span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
            </div>
            <div className='feature'>
                <span>Lorem ipsum</span>
                <span><Number n={1235}/></span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
            </div>
            <div className='feature'>
                <span>Lorem ipsum</span>
                <span><Number n={3567}/></span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
            </div>
            <div className='feature'>
                <span>Lorem ipsum</span>
                <span><Number n={8000}/>+</span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
            </div>
        </div>
    </div>
  )
}

export default Features