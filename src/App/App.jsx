import { useState } from "react";
import MenuBlock from "../Menu/Menu";
import "./App.css";
import arrCard from "../ListBurgers.json";
import BurgerActive from "../BurgerActive/BurgerActive";

import Burgers from "../Pages/Burgers/Burgers";
import HotDogs from "../Pages/HotDogs/HotDogs";
import Snacks from "../Pages/Snacks/Snacks";
import Error from "../Pages/Error/Error";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  const MenuList = arrCard.Menu;
  const arrCardsListBurgers = arrCard.allBurgers;
  const arrCardsListSnacks = arrCard.allSnacks;
  const arrCardsListHotDogs = arrCard.allHotDogs;
  const arrCardsActive = arrCard.activeUser;
  const [active, setActiveUsers] = useState(arrCardsActive);

  const [menu] = useState(MenuList);
  if (!menu) {
    return <h1>Eror404</h1>;
  }

  const [burgers, setAllUsersBurgers] = useState(arrCardsListBurgers);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [snacks, setAllUsersSnacks] = useState(arrCardsListSnacks);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [hotdogs, setAllUsersHotDogs] = useState(arrCardsListHotDogs);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [allNum, setNum] = useState(0);
  function editAllNum(amper) {
    setNum(allNum + amper);
  }

  const [allSum, setSum] = useState(0);
  function editAllSum(amper2) {
    setSum(allSum + amper2);
  }

  function addActiveUser(user) {
    console.log(user);
    const truUser = active.find((item) => item === user);
    if (truUser) return;
    editAllSum(+user.cost);
    editAllNum(+1);
    const lastid = active[active.length - 1].id;
    user.id = +lastid + 1;
    console.log(lastid);
    setActiveUsers((prevState) => [...prevState, user]);
    console.log(2121);
  }

  function delCards(id) {
    const copyBurgersArr = [...active];
    const newBurgersArr = copyBurgersArr.filter((item) => item.id != id);
    setActiveUsers(newBurgersArr);
  }
  if (!active && !menu && !burgers && !snacks && !hotdogs) {
    return <h1>Eror404</h1>;
  }

  const [showModal, setShowModal] = useState(false);
  const [indexUserModal, setIndexUserModal] = useState(0);

  function handleOpenModal(id) {
    setShowModal(true);
    setIndexUserModal(id - 1)
  }

  return (
    <Router>
      <div className="All">
        <div className="nav">
          <img className="nav_img" src="../src/assets/logo.png" alt="" />
          <div className="mav_no_logo">
            <img
              className="burger_logo"
              src="../src/assets/burger_logo.png"
              alt=""
            />
            <div className="nav_text">
              <p className="nav_text_name_1">Только самые</p>
              <p className="nav_text_name_2">сочные бургеры!</p>
              <p className="nav_text_another">Бесплатная доставка от 599₽</p>
            </div>
          </div>
        </div>
        <div className="main">
          {menu.map((item) => (
            <MenuBlock {...item} key={item.id} />
          ))}
        </div>
        <div className="basket">
          <div className="basket_all_num_div">
            <p className="basket_all_num_text">Корзина</p>
            <div className="basket_all_num">{allNum}</div>
          </div>
          <div className="active_burgers">
            {active.map((item) => (
              <BurgerActive
                {...item}
                key={item.id}
                editAllNum={editAllNum}
                editAllSum={editAllSum}
                delCards={delCards}
              />
            ))}
          </div>
          <div className="basket_all_cost_div">
            <p className="basket_all_cost_text">Итого</p>
            <p className="basket_all_cost">{allSum}р</p>
          </div>
          <button className="delyvery_button">Оформить заказ</button>
          <div className="delivery">
            <img src="../src/assets/Доставка.png" alt="" />
            <p className="delivery_text">Бесплатная доставка</p>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Burgers
                allUsers={burgers}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route
            path="/snacks"
            element={
              <Snacks
                allUsers={snacks}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route
            path="/hotdogs"
            element={
              <HotDogs
                allUsers={hotdogs}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <div className="footer">
          <div className="left_footer">
            <img
              className="left_footer_img"
              src="../src/assets/logo_footer.png"
              alt=""
            />
            <div>
              <p>© YouMeal, 2022</p>
              <p>Design: Anastasia Ilina</p>
            </div>
          </div>
          <div className="center_footer">
            <p className="center_footer_p">Номер для заказа</p>
            <div className="center_footer_div">
              <img
                className="center_footer_img"
                src="../src/assets/call.png"
                alt=""
              />
              <p className="center_footer_number">+7(930)833-38-11</p>
            </div>
          </div>
          <div className="right_footer">
            <p className="right_footer_p">Мы в соцсетях</p>
            <div className="right_footer_div">
              <img
                className="right_footer_WK"
                src="../src/assets/WK.png"
                alt=""
              />
              <img
                className="right_footer_telegram"
                src="../src/assets/telegram.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
