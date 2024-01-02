import "./BurgerInfo.css";

export default function BurgerInfo({ item, showModal, setIndexUserModal}) {


  return (
    showModal && (
      <div className="BurgerInfo">
        <div className="BurgerInfo_div">
          <div>
            <p>{item.name}</p>
            <img src="../src/assets/close.svg" alt="" />
          </div>
          <div>
            <img src={item.img} alt="" />
            <div>
              <p>
                Супер мясное наслаждение! Большая рубленая котлета из свежего
                говяжего мяса покорит вас своей сочностью, а хрустящие листья
                салата добавят свежести.
              </p>
              <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div>
                    <p>{item.weight}г,</p>
                    <p>ккал 440</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button></button>
            <div className='num_of_burgers_div'>
                <img onClick={() => {

        }} className='plus_or_minus' src="../src/assets/minus.svg" alt="" />
                <p className='num_of_burgers'>0</p>
                <img onClick={() => {

        }} className='plus_or_minus' src="../src/assets/plus.svg" alt="" />
            </div>
            <p>{item.cost}р</p>
          </div>
        </div>
      </div>
    )
  );
}
