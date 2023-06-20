import { Button } from "@mui/material";
import Image from "../../assets/ExploBCN.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__links">
            <img className="image_footer" src={Image} alt="logo" />
            <div className="footer__container__links__about">
              <Button>About us</Button>
            </div>
            <div className="footer__container__links__explore">
              <Button>FAQ</Button>
            </div>
            <div className="footer__container__links__social">
              <Button>Cookies</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
