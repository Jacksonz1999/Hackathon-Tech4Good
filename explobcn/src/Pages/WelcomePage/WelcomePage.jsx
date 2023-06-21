import './WelcomePage.css';
import { Link } from 'react-router-dom';
import  ButtonBrown  from '../../Components/ButtonBrown';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-page-left">
        <p>Barcelona, Spain</p>
        <h1>Discover the world around you</h1>
        <span>
          <Link to="/log-in">
            <button id ="btn-log">Log In</button>
          </Link>
          <Link to="/signup">
            <ButtonBrown name="Expore destinations" className = "w-full" />
          </Link>
        </span>
      </div>
      <div className="welcome-page-right">
      <div id = "image-1"><img className="welcome-image" src="https://images.unsplash.com/photo-1614635523324-795692530ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="view1" /></div>
      <div id = "image-2"><img className="welcome-image" src="https://images.unsplash.com/photo-1518474436123-0e44861523f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="view2" /></div>
      <div id = "image-3"><img className="welcome-image" src="https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80" alt="view3" /></div>
      <div id = "image-4" ><img className="welcome-image" src="https://images.unsplash.com/photo-1468793195345-d9d67818016d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="view4" /></div>
      </div>
    </div>
  );
}
export default WelcomePage;
