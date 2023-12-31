import './HotDogs.css'
import BurgerList from "../../BurgerList/BurgerList"
import BurgerInfo from "../../BurgerInfo/BurgerInfo";

export default function HotDogs({
    allUsers,
    addActiveUser,
    handleOpenModal,
    showModal,
    indexUserModal,
    setIndexUserModal,
    setShowModal
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
        <p className="name_of_menu">Хот-доги</p>
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