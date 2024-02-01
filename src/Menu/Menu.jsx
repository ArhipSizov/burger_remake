import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function MenuBlock({img, text, link}) {
    return(
        <NavLink to={link}  className="menu_div">
            <img className='menu_img' src={img} alt="" />
            <p className="menu_text">{text}</p>
        </NavLink>
    )
}