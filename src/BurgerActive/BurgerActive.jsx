import './BurgerActive.css';

export default function BurgerActive({img, name, weight, cost}){


    return(
        <div className='one_burger'>
            <img className='img_of_burger' src={img} alt="" />
            <div className='components'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
            <div className='num_of_burgers_div'>
                <img className='plus_or_minus' src="../src/assets/minus.svg" alt="" />
                <p className='num_of_burgers'>1</p>
                <img className='plus_or_minus' src="../src/assets/plus.svg" alt="" />
            </div>
        </div>
    )
}