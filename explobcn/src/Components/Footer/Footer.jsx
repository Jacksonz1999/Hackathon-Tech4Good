import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from "../../assets/ExploBCN.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__links">
            <img className="image_footer" src={Image} alt="logo" />
            <div className="footer__button">
              <Button>About us</Button>
              <Button>FAQ</Button>
              <Button>Cookies</Button>
            </div>
            <div className="footer__social">
                <FacebookIcon />
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
