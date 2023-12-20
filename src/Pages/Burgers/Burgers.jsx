import "./Burgers.css";
import BurgerList from "../../BurgerList/BurgerList";

export default function Burgers({ allUsers, addActiveUser, handleOpenModal }) {
  return (
    <div className="menu_of_burgers_all">
      <p className="name_of_menu">Бургеры</p>
      <div className="menu_of_burgers">
        <BurgerList
          allUsers={allUsers}
          addActiveUser={addActiveUser}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  );
}
