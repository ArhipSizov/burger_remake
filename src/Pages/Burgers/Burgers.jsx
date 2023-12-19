import './Burgers.css'
import BurgerList from "../../BurgerList/BurgerList"

export default function Burgers({
    allUsers,
    addActiveUser,
    handleOpenModal,
  }) {
    return (
        <div className='menu_of_burgers'>
                  <p className='name_of_menu'>Бургеры</p>
        <BurgerList allUsers={allUsers} addActiveUser={addActiveUser} handleOpenModal={handleOpenModal}/>
        </div>
    )
}