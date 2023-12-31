import { Card } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LuggageIcon from '@mui/icons-material/Luggage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Map from '../Map/Map'
import { getItinerary } from "../../services/itinerary.service.js";
import "./Main.css";

const Main = () => {

getItinerary('649211ce6d4ede812d50eb84')
.then(response => {
  console.log('REPSONE', response)
}) 
.catch(err => console.log(err)) 

  return (
    <>
    <div className="main_title">
     <h1>ExploBCN</h1>
     </div>
      <div className="main__container">
        <div className="main__container__image">
        {/* Here we import the Map component  */}
        <Map/>
        <div className="button_main">
      <button className = "welcomebutton"><RestaurantIcon/> Restaurant</button>
      <button className = "welcomebutton"><LuggageIcon/> Accomodations</button>
      <button className = "welcomebutton"><CelebrationIcon/> Popular</button>
        </div>
        </div>
        <div className = "card__content">
        <Card className="main__container__card">
          <div className="card_title">
            <h2>La Sagrada Familia</h2>
            <h5>300m</h5>
          </div>
          <p className="card_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since th
          </p>
        </Card>
        <Card className="main__container__card">
          <div className="card_title">
            <h2>Plaza Catalunya</h2>
            <h5>500m</h5>
          </div>
          <p className="card_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since th
          </p>
        </Card>
        </div>

      </div>

    </>
  );
};

export default Main;
