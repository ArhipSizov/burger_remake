import "./DeliveryAdd.css";
import { useState } from "react";
import BurgersInDelivery from "../BurgersInDelivery/BurgersInDelivery";

export default function DeliveryAdd({ setShowModal2, active }) {
  const [showModal3, setShowModal3] = useState(false);

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
            <div className="input_div">
              <input
                onClick={() => setShowModal3(false)}
                name="all"
                type="radio"
              />
              <p className="input_p">Самовывоз</p>
            </div>
            <div className="input_div">
              <input
                onClick={() => setShowModal3(true)}
                name="all"
                type="radio"
              />
              <p className="input_p">Доставка</p>
            </div>
            {showModal3 && (
              <div className="input_div">
                <p className="input_p">адрес дома</p>
                <input type="text" />
              </div>
            )}
            <div className="input_button">Купить</div>
          </div>
        </div>
      </div>
    );
  }
}
