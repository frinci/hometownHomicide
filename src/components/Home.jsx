import React, { Component } from 'react'
import '../styles/Home.css'
import Header from '../nav/Header.jsx'

import hero from '../images/MainHero.png'
import headshot from '../images/HeadShot.png'
import musician from '../images/dyer3.jpg'
import facebook from '../images/socials/facebookwhite.png'
import twitter from '../images/socials/twitterwhite.png'
import insta from '../images/socials/instagramwhite.png'
import bandcamp from '../images/socials/Bandcampwhite.png'

import podcasticsW from '../images/socials/Podcasticswhite.png'
import spotifyW from '../images/socials/Spotifywhite.png'
import rssW from '../images/socials/rsswhite.png'
import applepodw from '../images/socials/applePodswhite.png'

import podcasticsB from '../images/socials/Podcasticsblack.png'
import spotifyb from '../images/socials/Spotifyblack.png'
import rssb from '../images/socials/rssblack.png'
import applepodb from '../images/socials/applePodsblack.png'

import javier from '../images/ep2/Javier.jpg'
import grave from '../images/ep2/javierGrave.jpg'
import map from '../images/ep2/shootings.jpg'
import standoff from '../images/ep2/standoff.jpg'

import lightsey1 from '../images/ep1/ChristopherLightsey1995.jpg'
import lightsey2 from '../images/ep1/ChristopherLightsey2015.jpg'
import jessica from '../images/ep1/Jessica.jpg'
import nellie from '../images/ep1/Nellie.jpg'



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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
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

                <div className='episode'>
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
                    </div>

                    <div className='epPixBox'>
                            <img src={javier} alt="close up of Javier Casarez"/>
                            <img src={grave} alt="Javier Casarez's grave"/>
                            <img src={map} alt="map of shootings in Bakersfield, CA"/>
                            <img src={standoff} alt="sherrif standoff with Casarez"/>
                            <p className='copyright'>Felix Adamo/The Bakersfield Californian via the Associated Press</p>
                    </div>
                </div>

                <div className='episode' id='episode1'>
                    <div className='epTextBox'>
                            <h1>Jessica Martinez</h1>
                            <div className='dateBox'>
                                <h1 className='date'>23</h1>
                                <h2>Oct <span>2020</span></h2>
                                <h2>Episode <span>1</span></h2>
                            </div>
                            <p>On May 10 1990, cute, cherup-faced, four-year-old Jessica Martinez was making mud pies outside ther Timber Cove Apartments in Bakersfield, CA. Her stepfather was watching her and her two brothers. At some point, he turned away from the window he watched from, and in that short time, little Jessica was taken</p>

                            <div className="socialBox">
                                <ul>
                                    <li><a href="https://www.podcastics.com/podcast/hometown-homicide/" target="_blank"><img src={podcasticsB} alt="podcastics icon"/></a></li>
                                    <li><a href="https://open.spotify.com/show/2ZH9Q4awzlDx5ZSaCF14Ez" target="_blank"><img src={spotifyb} alt="spotify icon"/></a></li>
                                    <li><a href="https://feeds.podcastics.com/podcastics/podcasts/rss/1331_4af15ea75c9fed663911076a5742b1e0.rss" target="_blank"><img src={rssb} alt="rss icon"/></a></li>
                                    <li><a href="https://podcasts.apple.com/us/podcast/hometown-homicide/id1537193559" target="_blank"><img src={applepodb} alt="apple podcasts icon"/></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='epPixBox'>
                                <img src={lightsey1} alt="mugshot of Christopher Lightsey 1995"/>
                                <img src={lightsey2} alt="Christopher Lightsey in court 2015"/>
                                <img src={jessica} alt="Two pictures of Jessica in puffed sleeve dress"/>
                                <img src={nellie} alt="Close up of Nelliw"/>
                                <p className='copyright'>Felix Adamo/The Bakersfield Californian via the Associated Press</p>
                        </div>
                </div>

                <div className='musicBox'>
                <div className="gridBox">
                        <img src={musician} className='musicFace' alt="Headshot of musician Ariel Dyer"/>

                        <div className='textBox'>
                            <h1>Music By Ariel Dyer</h1>
                            <p>Minstrel for hire:</p>
                            <p>Serenading you with covers and originals pop, punk, sad 90s, ukulele cabaret, and MORE!</p>

                        <form action="https://arieldyer.bandcamp.com/">
                            <input type="submit" formtarget="_blank" className='musicButton' value="LISTEN ON BANDCAMP" />
                        </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home