
const Footer = () => {
  return (
    <>
<div className="footer">
    <div className="footer__container">
        <div className="footer__container__logo">
            <img src="https://i.ibb.co/0jZQY1H/logo.png" alt="logo" />
        </div>
        <div className="footer__container__links">
            <div className="footer__container__links__about">
                <h3>About</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div className="footer__container__links__explore">
                <h3>Explore</h3>
                <ul>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Offers</a></li>
                </ul>
            </div>
            <div className="footer__container__links__social">
                <h3>Social</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Footer