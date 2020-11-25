import React, { Component } from 'react'
import '../styles/Home.css'
import Header from '../nav/Header.jsx'

import hero from '../images/MainHero.png'
import headshot from '../images/HeadShot.png'
import facebook from '../images/socials/facebookwhite.png'
import twitter from '../images/socials/twitterwhite.png'
import insta from '../images/socials/instagramwhite.png'
import bandcamp from '../images/socials/Bandcampwhite.png'
import podcasticsW from '../images/socials/Podcasticswhite.png'
import spotifyW from '../images/socials/Spotifywhite.png'
import rssW from '../images/socials/rsswhite.png'
import applepodw from '../images/socials/applePodswhite.png'

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
                    <div className="gridBox">
                        <img src={headshot} className='janiceFace' alt="Janice Bondurant facing right with Hometown Homicide caution tape overlayed on the picture"/>

                        <div className='textBox'>
                            <h1>Hometown Homicide Podcast</h1>
                            <p></p>
                        </div>
                    </div>

                    <div className="socialBox">
                        <ul>
                            <li><a href="https://www.facebook.com/HometownHomicide" target="_blank"><img src={facebook} alt="facebook icon"/></a></li>
                            <li><a href="https://twitter.com/HometownJanice" target="_blank"><img src={twitter} alt="twitter icon"/></a></li>
                            <li><a href="https://www.instagram.com/hometownhomicide/" target="_blank"><img src={insta} alt="instagram icon"/></a></li>
                            <li><a href="https://arieldyer.bandcamp.com/" target="_blank"><img src={bandcamp} alt="bandcamp icon"/></a></li>
                        </ul>
                    </div>
                </div>

                <div classname='episode'>
                    <div className='epTextBox'>
                        <h1>Casarez Rampage</h1>
                        <div className='dateBox'>
                            <h1 className='date'>12</h1>
                            <h2>Nov <span>2020</span></h2>
                            <h2>Episode <span>2</span></h2>
                        </div>
                        <p>A man feels he has been wronged, but can a shooting spree make it right?</p>

                        <div className="socialBox">
                            <ul>
                                <li><a href="https://www.podcastics.com/podcast/hometown-homicide/" target="_blank"><img src={podcasticsW} alt="podcastics icon"/></a></li>
                                <li><a href="https://open.spotify.com/show/2ZH9Q4awzlDx5ZSaCF14Ez" target="_blank"><img src={spotifyW} alt="spotify icon"/></a></li>
                                <li><a href="https://feeds.podcastics.com/podcastics/podcasts/rss/1331_4af15ea75c9fed663911076a5742b1e0.rss" target="_blank"><img src={rssW} alt="rss icon"/></a></li>
                                <li><a href="https://podcasts.apple.com/us/podcast/hometown-homicide/id1537193559" target="_blank"><img src={applepodw} alt="apple podcasts icon"/></a></li>
                            </ul>
                        </div>
                        <div className='epPicsBox'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home