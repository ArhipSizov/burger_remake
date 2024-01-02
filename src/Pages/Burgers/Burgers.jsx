import "./Burgers.css";
import BurgerList from "../../BurgerList/BurgerList";
import BurgerInfo from "../../BurgerInfo/BurgerInfo"

export default function Burgers({ allUsers, addActiveUser, handleOpenModal, showModal, indexUserModal, setIndexUserModal}) {
console.log(allUsers);
  return (
    <div className="menu_of_burgers_all">
      {showModal && <BurgerInfo setIndexUserModal={setIndexUserModal} showModal={showModal} item={allUsers[indexUserModal]}/>}
      <p className="name_of_menu">Бургеры</p>
      <div className="menu_of_burgers">
        <BurgerList
          allUsers={allUsers}
          addActiveUser={addActiveUser}
          showModal={showModal}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  );
}
