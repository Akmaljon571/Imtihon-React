import './footer.scss'
import foote_logo from '../../img/bobur.png'
import foote from '../../img/Subtract.png'
import Container from '../container/container'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer_father">
                    <div className="footer_img">
                          <img src={foote} className='footer_bg' alt="footer_bg" />
                          <img src={foote_logo} className='footer_logo' alt="footer_logo" />
                        <div className="footer_bgImage"></div>
                    </div>
                    <div className="footer_list_father">
                        <ul className="footer_list1 chisii">
                            <li className="footer_item1">
                                <h2 className='footer_item1_h2'>FIGHT WITH ME ON:</h2>
                            </li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Twitter'>Twitter</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink footer_active' to='/Instagram'>Instagram</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Telegram'>Telegram</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/YouTube'>YouTube</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Figma'>Figma</Link></li>
                        </ul>
                        <ul className="footer_list1">
                            <li className="footer_item1">
                                <h2 className='footer_item1_h2'>WHAT I HAVE DONE:</h2>
                            </li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/XalqKutubxonasi'>Xalq Kutubxonasi</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink footer_active' to='/Websitee'>Websitee</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Website'>Website</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/PlayMarket'>YouTube</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/AppStore'>Figma</Link></li>
                        </ul>
                        <ul className="footer_list1_blog">
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Contact'>Contact</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink footer_active' to='/Blog'>Blog</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Dribbble'>Dribbble</Link></li>
                            <li className="footer_item"><Link className='Footer_Navlink' to='/Behance'>Behance</Link></li>
                        </ul>
                    </div> 
                </div>
            </Container>
        </footer>
    )
}

export default Footer