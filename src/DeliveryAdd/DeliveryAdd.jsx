import "./DeliveryAdd.css";
import { useState } from "react";
import BurgersInDelivery from "../BurgersInDelivery/BurgersInDelivery";

export default function DeliveryAdd({ setShowModal2, active, allSum }) {
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(true);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input11, setInput11] = useState("");
  const [input21, setInput21] = useState("");
  const [input22, setInput22] = useState("");
  const [input23, setInput23] = useState("");

  function setShowModal5_f() {
    if (input1 == "" || input2 == "" || input3 == "") {
      setShowModal6(true)
    } else {
      if (input21 == "" || input22 == "" || input23 == "") {
        if (input11 == "") {
          setShowModal6(true)
        } else {
          setShowModal5(true);
        }
      } else {
        setShowModal5(true);
      }
    }
  }

  if (active.length == 1) {
    setShowModal2(false);
  } else {
    return (
      <div className="DeliveryAdd" onClick={() => setShowModal2(false)}>
        {showModal5 && (
          <a href="https://www.google.by/?hl=ru">
            <div
              onClick={() => {
                setShowModal5(false);
              }}
              className="DeliveryAdd_and"
            >
              <p>Спасибо за покупку!</p>
            </div>
          </a>
        )}
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
            <input
              value={input1}
              onChange={(event) => setInput1(event.target.value)}
              type="text"
              placeholder="Ваше имя"
            />
            <input
              value={input2}
              onChange={(event) => setInput2(event.target.value)}
              type="text"
              placeholder="Телефон"
            />
            <div className="input_div">
              <input
                onClick={() => {
                  setInput21("");
                  setInput22("");
                  setInput23("");
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
                  setInput11("");
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
                <input
                  value={input21}
                  onChange={(event) => setInput21(event.target.value)}
                  type="text"
                  placeholder="Улица, дом, квартира"
                />
                <div>
                  <input
                    value={input22}
                    onChange={(event) => setInput22(event.target.value)}
                    type="text"
                    placeholder="Этаж"
                  />
                  <input
                    value={input23}
                    onChange={(event) => setInput23(event.target.value)}
                    type="text"
                    placeholder="Домофон"
                  />
                </div>
              </div>
            )}
            {showModal4 && (
              <select
                value={input11}
                onChange={(event) => setInput11(event.target.value)}
                className="select_delivery"
                size="5"
                multiple
              >
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
            <p>Стоимость: {allSum}р</p>
            <input
              value={input3}
              onChange={(event) => setInput3(event.target.value)}
              type="text"
              placeholder="Введите данные карты"
            />
            {showModal6 && <p className="Eror_delivery">Заполните все колонки!</p>}
            <div
              onClick={() => {
                setShowModal5_f();
              }}
              className="input_button"
            >
              Оформить
            </div>
          </div>
        </div>
      </div>
    );
  }
}
