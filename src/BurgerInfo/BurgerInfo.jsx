import "./BurgerInfo.css";
import { useState } from "react";

export default function BurgerInfo({
  item,
  showModal,
  setIndexUserModal,
  addActiveUser,
  editAllNum,
  editAllSum,
  setShowModal
}) {


const [num, setNum] = useState(1);
const [sum, setSum] = useState(0);

function editBut(amper) {
  if (String(amper) === "-1" && num === 0){

      const result2 = sum
      editAllSum(0)
      setSum(result2)
      return
  }
const result = num + amper
editAllNum(amper)
setNum(result)
}
function editBut2(amper) {
  let cost2 = -item.cost
  if (String(amper) === cost2 && sum === 0){
      

          return
        }
const result2 = sum + amper
editAllSum(amper)
setSum(result2)
}



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
            <button onClick={()=>addActiveUser(item, num)} className="BurgerInfo_button">
              Добавить
            </button>
            <div className="num_of_burgers_div" onClick={(e)=>{e.stopPropagation()}} >
              <img
                              onClick={() => {
                                editBut2(-item.cost);
                                editBut(-1);
                              }}
                className="plus_or_minus"
                src="../src/assets/minus.svg"
                alt=""
              />
              <p className="num_of_burgers">{num}</p>
              <img
                              onClick={() => {
                                editBut2(+item.cost);
                                editBut(+1);
                              }}
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
