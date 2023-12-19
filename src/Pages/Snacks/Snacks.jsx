import './Snacks.css'
import BurgerList from "../../BurgerList/BurgerList"

export default function Snacks({
    allUsers,
    addActiveUser,
    handleOpenModal,
  }) {
    return (
        <div className='menu_of_burgers'>
            <p className='name_of_menu'>Закуски</p>
        <BurgerList allUsers={allUsers} addActiveUser={addActiveUser} handleOpenModal={handleOpenModal}/>
        </div>
    )
}