import { Link } from "react-router-dom";

type Props = {
  to: string,
  bg: string,
  text: string,
  textColor: string,
  onClick?: () => void
};

const NavigationLink = (props:Props) => {
  return <Link className="nav-link"
    to={props.to} onClick={props.onClick} 
    style={{ backgroundColor: props.bg, color: props.textColor}}>
    {props.text}
  </Link>

}

export default NavigationLink