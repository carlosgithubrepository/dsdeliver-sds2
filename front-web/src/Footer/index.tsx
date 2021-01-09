import './styles.css';
import {ReactComponent as YouTubeIcon } from './youtube.svg';
import {ReactComponent as LinkedinIcon } from './linkedin.svg';
import {ReactComponent as InstagramIcon } from './instagram.svg';
function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido no evento Semana DevSuperior
            <div className="footer-icons">
                <a href="one">
                    <YouTubeIcon />
                </a>
                <a href="two">
                    <LinkedinIcon />
                </a>
                <a href="tree">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}
export default Footer;