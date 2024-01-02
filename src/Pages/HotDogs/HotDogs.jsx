import './HotDogs.css'
import BurgerList from "../../BurgerList/BurgerList"

export default function HotDogs({
    allUsers,
    addActiveUser
  }) {
    return (
        <div className="menu_of_burgers_all">
        <div className='menu_of_burgers'>
            <p className='name_of_menu'>Хот-Доги</p>
        <BurgerList allUsers={allUsers} addActiveUser={addActiveUser}/>
        </div>
        </div>
    )
}