import "./DeliveryAdd.css";
import { useState } from "react";
import BurgersInDelivery from "../BurgersInDelivery/BurgersInDelivery";

export default function DeliveryAdd({ setShowModal2, active }) {
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(true);

  if (active.length == 1) {
    setShowModal2(false);
  } else {
    return (
      <div className="DeliveryAdd" onClick={() => setShowModal2(false)}>
        <div
          className="DeliveryAdd_div"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="DeliveryAdd_div_2">
            {active.map((item) => (
              <BurgersInDelivery {...item} key={item.id} />
            ))}
          </div>
          <div className="input_all">
            <p className="input_all_delivery_p">Доставка</p>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Телефон" />
            <div className="input_div">
              <input
                onClick={() => {
                  setShowModal4(true);
                  setShowModal3(false);
                }}
                name="all"
                type="radio"
              />
              <p className="input_p">Самовывоз</p>
            </div>
            <div className="input_div">
              <input
                onClick={() => {
                  setShowModal3(true);
                  setShowModal4(false);
                }}
                name="all"
                type="radio"
              />
              <p className="input_p">Доставка</p>
            </div>
            {showModal3 && (
              <div className="input_div_3">
                <input type="text" placeholder="Улица, дом, квартира" />
                <div>
                  <input type="text" placeholder="Этаж" />
                  <input type="text" placeholder="Домофон" />
                </div>
              </div>
            )}
            {showModal4 && (
              <select className="select_delivery" size="5" multiple>
                <option>ул. Гагарина д. 8</option>
                <option>ул. Ермака д. 14</option>
                <option>ул. Павлова д. 47</option>
                <option>ул. Центральная д. 3</option>
                <option>ул. Передовая д. 86</option>
                <option>ул. Инженерная д. 24</option>
                <option>ул. Академическая д. 43</option>
                <option>ул. Уральская д. 6</option>
              </select>
            )}
            <div className="input_button">Оформить</div>
          </div>
        </div>
      </div>
    );
  }
}
