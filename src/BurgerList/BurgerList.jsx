import "./BurgerList.css";
import { v4 as uuidv4 } from "uuid";

export default function BurgerLists({
  allUsers,
  addActiveUser,
  handleOpenModal,
}) {

  return (
    <div className="BurgerLists">
      {allUsers.map((item) => (
        <div
          className="allUsers"
          key={uuidv4()}
          onClick={() => {
            handleOpenModal(item.id);
          }}
        >
          <img className="BurgerLists_img" src={item.img} alt="" />
          <p className="BurgerLists_cost">{item.cost}р</p>
          <p className="BurgerLists_name">{item.name}</p>
          <p className="BurgerLists_weight">{item.weight}г</p>
          <button
            className="BurgerLists_button"
            onClick={() => {
              addActiveUser(item);
            }}
          >
            Добавить
          </button>
        </div>
      ))}
    </div>
  );
}
