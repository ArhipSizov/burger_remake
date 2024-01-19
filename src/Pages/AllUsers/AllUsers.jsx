import "./AllUsers.css";
import BurgerList from "../../BurgerList/BurgerList";
import BurgerInfo from "../../BurgerInfo/BurgerInfo";

export default function AllUsers({
  allUsers,
  addActiveUser,
  handleOpenModal,
  showModal,
  indexUserModal,
  setIndexUserModal,
  setShowModal,
  classN
}) {


  return (
    <div className="menu_of_burgers_all">
      {showModal && (
        <BurgerInfo
        setShowModal={setShowModal}
          setIndexUserModal={setIndexUserModal}
          showModal={showModal}
          item={allUsers[indexUserModal]}
          addActiveUser={addActiveUser}
          allUsers={allUsers}
        />
      )}
      <p className="name_of_menu">Бургеры</p>
      <div className="menu_of_burgers">
        <BurgerList
          classN={classN}
          allUsers={allUsers}
          addActiveUser={addActiveUser}
          showModal={showModal}
          handleOpenModal={handleOpenModal}
        />
      </div>
    </div>
  );
}
