import './BurgerList.css';

export default function BurgerLists({img, cost, name, weight}){




    return(
         <div className='BurgerLists'>
            <img className='BurgerLists_img' src={img} alt="" />
            <p className='BurgerLists_cost'>{cost}р</p>
            <p className='BurgerLists_name'>{name}</p>
            <p className='BurgerLists_weight'>{weight}г</p>
            <button className='BurgerLists_button'>Добавить</button>
        </div>
    )
}