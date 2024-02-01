import { useEffect, useState } from "react";
import MenuBlock from "../Menu/Menu";
import "./App.css";
import arrCard from "../ListBurgers.json";
import BurgerActive from "../BurgerActive/BurgerActive";
import DeliveryAdd from "../DeliveryAdd/DeliveryAdd";

import AllUsers from "../Pages/AllUsers/AllUsers";
import Combo from "../Pages/Combo/Combo";
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
  const arrCardsListVoks = arrCard.allVoks;
  const arrCardsListDesserts = arrCard.allDesserts;
  const arrCardsListShawarmas = arrCard.allShawarmas;
  const arrCardsListPizzas = arrCard.allPizzas;
  const arrCardsListSauces = arrCard.allSauces;
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

  const [voks, setAllUsersVoks] = useState(arrCardsListVoks);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [desserts, setAllUsersDesserts] = useState(arrCardsListDesserts);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [shawarmas, setAllUsersShawarmas] = useState(arrCardsListShawarmas);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [pizzas, setAllUsersPizzas] = useState(arrCardsListPizzas);
  if (!burgers) {
    return <h1>Eror404</h1>;
  }

  const [sauces, setAllUsersSauces] = useState(arrCardsListSauces);
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
    const truUser = active.find((item) => item === user);
    if (truUser) return;
    editAllSum(+user.cost);
    editAllNum(+1);
    const lastid = active[active.length - 1].id;
    user.id = +lastid + 1;
    setActiveUsers((prevState) => [...prevState, user]);
  }
  function addActiveUser_2(user) {
    const truUser = active.find((item) => item === user);
    if (truUser) return;
    editAllSum(+user.cost);
    editAllNum(+1);
    const lastid = active[active.length - 1].id;
    user.id = +lastid + 1;
    setActiveUsers((prevState) => [...prevState, user]);
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
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModalExpand, setShowModalExpand] = useState(false);
  const [showModalNotExpand, setShowModalNotExpand] = useState(false);
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  const [indexUserModal, setIndexUserModal] = useState(0);

  function handleOpenModal(id) {
    setShowModal(true);
    setIndexUserModal(id - 1);
  }

  setTimeout(function () {
    if (active.length == 1) {
      setShowModal3(false);
    } else {
      setShowModal3(true);
    }
    if (active.length > 3 && showModalNotExpand == false) {
      setShowModalExpand(true);
    } else {
      setShowModalExpand(false);
    }
    if (allSum > 599) {
      setShowModalDelivery(true);
    } else if (allSum < 600) {
      setShowModalDelivery(false);
    }
  }, 10);

function functionExpand() {
  setShowModalExpand(false)
  setShowModalNotExpand(true)
}
function functionNotExpand() {
  setShowModalExpand(true)
  setShowModalNotExpand(false)
}
  useEffect(() => {
    const basket = document.querySelector(".active_burgers_const");
    const basket2 = document.querySelector(".active_burgers_const2");
    if (showModalNotExpand == true) {
      basket.classList.remove('active_burgers')
      basket2.classList.remove('active_burgers')

    }else{
      if (showModalExpand == true) {
        basket.classList.add('active_burgers')
        basket2.classList.add('active_burgers')
      }
    }
    console.log(basket);
  }, [showModalExpand]);

  return (
    <Router>
      <div className="All">
        {showModal2 && (
          <DeliveryAdd
            setShowModal2={setShowModal2}
            allSum={allSum}
            active={active}
          />
        )}
        <div className="nav">
          <img className="nav_img" src="/img/logo.png" alt="" />
          <div className="mav_no_logo">
            <img className="burger_logo" src="/img/burger_logo.png" alt="" />
            <div className="nav_text">
              <p className="nav_text_name_1">Только самые</p>
              <p className="nav_text_name_2">сочные бургеры!</p>
              <p className="nav_text_another">Бесплатная доставка от 599₽</p>
            </div>
          </div>
        </div>
        <div className="main2">
          <div className="main">
            {menu.map((item) => (
              <MenuBlock {...item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="basket none1">
          <div className="basket_all_num_div">
            <p className="basket_all_num_text">Корзина</p>
            <div className="basket_all_num">{allNum}</div>
          </div>
          {(showModal3 && (
            <div>
              <div className="active_burgers active_burgers_const">
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
              {showModalExpand && (
                <p onClick={() => functionExpand()} className="expand">
                  Развернуть
                </p>
              )}
              {showModalNotExpand && (
                <p onClick={() => functionNotExpand()} className="not_expand">
                  Свернуть
                </p>
              )}
              <div className="basket_all_cost_div">
                <p className="basket_all_cost_text">Итого</p>
                <p className="basket_all_cost">{allSum}р</p>
              </div>
              <button
                onClick={() => setShowModal2(true)}
                className="delyvery_button"
              >
                Оформить заказ
              </button>
              {showModalDelivery && (
                <div className="delivery">
                  <img src="/img/Доставка.png" alt="" />
                  <p className="delivery_text">Бесплатная доставка</p>
                </div>
              )}
            </div>
          )) || (
            <div>
              <p className="basket_zero">Тут пока пусто :(</p>
            </div>
          )}
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <AllUsers
                allUsers={burgers}
                addActiveUser={addActiveUser_2}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsers"
                pN="Бургеры"
              />
            }
          />
          <Route
            path="/snacks"
            element={
              <AllUsers
                allUsers={snacks}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsers"
                pN="Закуски"
              />
            }
          />
          <Route
            path="/hotdogs"
            element={
              <AllUsers
                allUsers={hotdogs}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsers"
                pN="Хот-доги"
              />
            }
          />
          <Route
            path="/vok"
            element={
              <AllUsers
                allUsers={voks}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsersAlt"
                pN="Воки"
              />
            }
          />
          <Route
            path="/dessert"
            element={
              <AllUsers
                allUsers={desserts}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsersAlt"
                pN="Десерты"
              />
            }
          />
          <Route
            path="/shawarma"
            element={
              <AllUsers
                allUsers={shawarmas}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsersAlt"
                pN="Шаурмы"
              />
            }
          />
          <Route
            path="/pizza"
            element={
              <AllUsers
                allUsers={pizzas}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsersAlt"
                pN="Пиццы"
              />
            }
          />
          <Route
            path="/sauces"
            element={
              <AllUsers
                allUsers={sauces}
                addActiveUser={addActiveUser}
                showModal={showModal}
                handleOpenModal={handleOpenModal}
                indexUserModal={indexUserModal}
                setIndexUserModal={setIndexUserModal}
                setShowModal={setShowModal}
                classN="AllUsersAlt"
                pN="Соусы"
              />
            }
          />
          <Route path="*" element={<Error />} />
          <Route path="/combo" element={<Combo />} />
        </Routes>
        <div className="basket none2">
          <div className="basket_all_num_div">
            <p className="basket_all_num_text">Корзина</p>
            <div className="basket_all_num">{allNum}</div>
          </div>
          {(showModal3 && (
            <div>
              <div className="active_burgers active_burgers_const2">
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
              {showModalExpand && (
                <p onClick={() => functionExpand()} className="expand">
                  Развернуть
                </p>
              )}
              {showModalNotExpand && (
                <p onClick={() => functionNotExpand()} className="not_expand">
                  Свернуть
                </p>
              )}
              <div className="basket_all_cost_div">
                <p className="basket_all_cost_text">Итого</p>
                <p className="basket_all_cost">{allSum}р</p>
              </div>
              <button
                onClick={() => setShowModal2(true)}
                className="delyvery_button"
              >
                Оформить заказ
              </button>
              {showModalDelivery && (
                <div className="delivery">
                  <img src="/img/Доставка.png" alt="" />
                  <p className="delivery_text">Бесплатная доставка</p>
                </div>
              )}
            </div>
          )) || (
            <div>
              <p className="basket_zero">Тут пока пусто :(</p>
            </div>
          )}
        </div>
        <div className="footer">
          <div className="left_footer">
            <img
              className="left_footer_img"
              src="/img/logo_footer.png"
              alt=""
            />
          </div>
          <div className="center_footer">
            <p className="center_footer_p">Номер для заказа</p>
            <div className="center_footer_div">
              <img className="center_footer_img" src="/img/call.png" alt="" />
              <p className="center_footer_number">+7(930)833-38-11</p>
            </div>
          </div>
          <div className="right_footer">
            <p className="right_footer_p">Мы в соцсетях</p>
            <div className="right_footer_div">
              <a href="https:/vk.com/">
                <img className="right_footer_WK" src="/img/WK.png" alt="" />
              </a>
              <a href="https:/web.telegram.org/a/">
                <img
                  className="right_footer_telegram"
                  src="/img/telegram.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>© YouMeal, 2022</p>
          <p>Design: Anastasia Ilina</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
