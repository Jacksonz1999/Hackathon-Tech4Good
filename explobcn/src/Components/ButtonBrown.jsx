import './ButtonBrown.css'

const ButtonBrown = (props) => {
  return (
    <button type="submit" className="button-primary">{props.name}</button>
  );
}
export default ButtonBrown;
