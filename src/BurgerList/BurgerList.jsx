import "./BurgerList.css";
import { v4 as uuidv4 } from "uuid";
import BurgerInfo from "../BurgerInfo/BurgerInfo"


export default function BurgerLists({
  allUsers,
  addActiveUser, handleOpenModal
}) {



  return (
    <div className="BurgerLists">
      {allUsers.map((item) => (
        <div
          className="allUsers"
          key={uuidv4()}

          
        ><div onClick={()=>{handleOpenModal(item.id_false)}} >
          <img className="BurgerLists_img" src={item.img} alt="" />
          <p className="BurgerLists_cost">{item.cost}р</p>
          <p className="BurgerLists_name">{item.name}</p>
          <p className="BurgerLists_weight">{item.weight}г</p>
          </div>
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
