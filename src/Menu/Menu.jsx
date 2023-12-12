import './Menu.css';

export default function MenuBlock({img, text, menu_div}) {



    return(
        <div className={menu_div}>
            <img className='menu_img' src={img} alt="" />
            <p className="menu_text">{text}</p>
        </div>
    )
}