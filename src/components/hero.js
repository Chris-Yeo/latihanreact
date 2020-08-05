import React from 'react'

import ButtonAll from './button'
import './hero.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Hero = ({ title, description, action1, action2, titleButton1, titleButton2 }) => {
    return (
        <div className="sectionOne">
            <div className="hero">
                <div className="heroTitle">
                    <h2>{title}</h2>
                </div>
                <div className="heroDescription">
                    <p>{description}</p>
                </div>
            </div>
            <div className="buttons">
                <div className="button1">
                <Link to="/discover">
                <ButtonAll
                    text={titleButton1}
                    primary
                    type="button"
                    onClick={action1}
                    />
                </Link>
                </div>
                <div className="button2">
                    <ButtonAll
                    text={titleButton2}
                    secondary
                    type="button"
                    onClick={action2}
                    />
                </div>
            </div>
        </div>
)}

export default Hero