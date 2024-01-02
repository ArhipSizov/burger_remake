import "./BurgerInfo.css";

export default function BurgerInfo({
  item,
  showModal,
  setIndexUserModal,
  addActiveUser,
  setShowModal
}) {
console.log(item);
  return (
    showModal && (
      <div className="BurgerInfo" onClick={()=>setShowModal(false)}>
        <div className="BurgerInfo_div">
          <div>
            <p className="BurgerInfo_name">{item.name}</p>
            <img className="close_img" src="../src/assets/close.svg" alt="" />
          </div>
          <div className="BurgerInfo_footer">
            <img src={item.img} alt="" />
            <div className="BurgerInfo_footer_div">
              <p>
                Супер мясное наслаждение! Большая рубленая котлета из свежего
                говяжего мяса покорит вас своей сочностью, а хрустящие листья
                салата добавят свежести.
              </p>
              <div>
                <p>Состав:</p>
                <p>Пшеничная булочка</p>
                <p>Котлета из говядины</p>
                <p>Красный лук</p>
                <p>Листья салата</p>
                <p>Соус горчичный</p>
                <div>
                  <p>{item.weight}г,</p>
                  <p>ккал 440</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BurgerInfo_div_2">
            <button onClick={addActiveUser} className="BurgerInfo_button">
              Добавить
            </button>
            <div className="num_of_burgers_div">
              <img
                onClick={() => {}}
                className="plus_or_minus"
                src="../src/assets/minus.svg"
                alt=""
              />
              <p className="num_of_burgers">0</p>
              <img
                onClick={() => {}}
                className="plus_or_minus"
                src="../src/assets/plus.svg"
                alt=""
              />
            </div>
            <p>{item.cost}р</p>
          </div>
        </div>
      </div>
    )
  );
}
