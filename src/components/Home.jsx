import React, { Component } from 'react'
import '../styles/Home.css'
import Header from '../nav/Header.jsx'

import hero from '../images/MainHero.png'
import headshot from '../images/HeadShot.png'
import facebook from '../images/socials/facebookwhite.png'
import twitter from '../images/socials/twitterwhite.png'
import insta from '../images/socials/instagramwhite.png'
import bandcamp from '../images/socials/Bandcampwhite.png'

class Home extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                <Header/>

                <div>
                    <img src={hero} className='hero' alt="the Bakersfiled sign over Buck Owen's boulevard in Bakersfield, Ca, with the title 'Howetown Homicide' overlayed"/>
                </div>

                <div className="aboutBox">
                    <img src={headshot} className='janiceFace' alt="Janice Bondurant facing right with Hometown Homicide caution tape overlayed on the picture"/>

                    <div className='textBox'>
                        <h1>Hometown Homicide Podcast</h1>
                    </div>
                    <div className="socialBox">
                        <ul>
                            <li><a href=""><img src={facebook} alt=""/></a></li>
                            <li><a href=""><img src={twitter} alt=""/></a></li>
                            <li><a href=""><img src={insta} alt=""/></a></li>
                            <li><a href=""><img src={bandcamp} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home