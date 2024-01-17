import './Shawarma.css'
import BurgerList from "../../BurgerList/BurgerList"
import BurgerInfo from "../../BurgerInfo/BurgerInfo";

export default function Shawarma({
    allUsers,
    addActiveUser,
    handleOpenModal,
    showModal,
    indexUserModal,
    setIndexUserModal,
    editAllNum,
    editAllSum,
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
            editAllNum={editAllNum}
            editAllSum={editAllSum}
          />
        )}
        <p className="name_of_menu">Закуски</p>
        <div className="menu_of_burgers">
          <BurgerList classN="allUsersAlt"
            allUsers={allUsers}
            addActiveUser={addActiveUser}
            showModal={showModal}
            handleOpenModal={handleOpenModal}
          />
        </div>
      </div>
    );
  }