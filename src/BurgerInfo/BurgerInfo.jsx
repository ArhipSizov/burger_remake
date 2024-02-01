import "./BurgerInfo.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function BurgerInfo({
  item,
  showModal,
  addActiveUser,
  setShowModal,
}) {
  const allCompound = item.compound;
  const [compound, setAllUsersCompound] = useState(allCompound);

  return (
    showModal && (
      <div className="BurgerInfo" onClick={() => setShowModal(false)}>
        <div className="BurgerInfo_div">
          <div>
            <p className="BurgerInfo_name">{item.name}</p>
            <img className="close_img" src="/img/close.png" alt="" />
          </div>
          <div className="BurgerInfo_footer">
            <img className="BurgerInfo_img" src={item.img} alt="" />
            <div className="BurgerInfo_footer_div">
              <p>{item.description}</p>
              <div>
                <p>Состав:</p>
                <div className="compound_div">
                  {compound.map((item) => (
                    <div key={uuidv4()}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p>{item.weight}г,</p>
                  <p>ккал {item.kcal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BurgerInfo_div_2">
            <button
              onClick={() => addActiveUser(item)}
              className="BurgerInfo_button"
            >
              Добавить
            </button>
            <p>{item.cost}р</p>
          </div>
        </div>
      </div>
    )
  );
}
