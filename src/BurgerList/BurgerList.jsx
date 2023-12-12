import './BurgerList.css';
import { v4 as uuidv4 } from 'uuid';

export default function BurgerLists({img, cost, name, weight,allUsers, addActiveUser, handleOpenModal}){





    return(
         <div className='BurgerLists'>
            {allUsers.map((item) => (
                <div
                className='allUsers'
                key={uuidv4()}
                onClick={()=>{
                    handleOpenModal(item.id)
                }}
                ></div>
            ))}
            <img className='BurgerLists_img' src={img} alt="" />
            <p className='BurgerLists_cost'>{cost}р</p>
            <p className='BurgerLists_name'>{name}</p>
            <p className='BurgerLists_weight'>{weight}г</p>
            <button className='BurgerLists_button' onClick={() => addActiveUser(item)}>Добавить</button>
        </div>
    )
}