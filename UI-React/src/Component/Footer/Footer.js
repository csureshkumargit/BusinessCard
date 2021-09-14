import './Footer.css'
const Footer = () => {
    return (
        <div className='Footer-section footer'>
            <div className='copy-right-container'>
                <span className='copyright-text'>© 2021 Business , Businesscard</span>
            </div>
            <div className='social-media'>
                <p className='social-media-text'>We are available in these social media </p>
                <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                    <strong class="fab fa-linkedin social-icon social-icon-linkedin"></strong>
                </a>
                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                    <i class="fab fa-facebook social-icon social-icon-fb"></i>
                </a>
                <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                    <i class="fab fa-twitter-square social-icon social-icon-twitter"></i>
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                    <i class="fab fa-instagram-square social-icon social-icon-insta"></i>
                </a>
            </div>

        </div>

    );
}

export default Footer;