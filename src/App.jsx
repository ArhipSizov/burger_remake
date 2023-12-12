import { useState } from 'react'
import MenuBlock from "./Menu/Menu"
import './App.css'
import arrCard from "./ListBurgers.json"
import BurgerActive from "./BurgerActive/BurgerActive"
import BurgerList from "./BurgerList/BurgerList"

function App() {
  const [allUsers, setAllUsers] = useState(arrCard.BurgerList)
  const [activeUsers, setActiveUsers] = useState(arrCard.BurgerActive)

  const MenuList = arrCard.Menu

  const arrCardsList = arrCard.allUsers

  const arrCardsActive = arrCard.activeUser

  const [active] = useState(arrCardsActive)
  if (!active){
    return <h1>Eror404</h1>
  }

  const [menu] = useState(MenuList)
  if (!menu){
    return <h1>Eror404</h1>
  }

  const [burgers] = useState(arrCardsList)
  if (!burgers){
    return <h1>Eror404</h1>
  }

  const [allNum,setNum] = useState(3)
  function editAllNum(amper) {
      setNum(allNum + amper)
  }

  const [allSum,setSum] = useState(975)
  function editAllSum(amper2) {
    setSum(allSum + amper2)
}

function addActiveUser(user){
  const truUser = activeUsers.find((item) => item.nameUser === user.nameUser);
  if (truUser) return;
  const lastid = activeUsers[activeUsers.length - 1].id;
  user.id = lastid + 1;
  setActiveUsers((prevState) => [...prevState, user]);
}
function handleOpenModal(id){
  setShowModal(true)
  setIndexUserrModal(id - 1);
}

  return (
    <div className="All">
      <div className="nav"></div>
      <div className="main">
      {menu.map(item => <MenuBlock {...item} key={item.id}/>)}
      </div>
      <p className='name_of_menu'>Бургеры</p>
      <div className="functions_in_all">
        <div className='basket'>
          <div className='basket_all_num_div'>
            <p className='basket_all_num_text'>Корзина</p>
            <div className='basket_all_num'>{allNum}</div>
          </div>
          <div className="active_burgers">
          {active.map(item => <BurgerActive {...item} key={item.id} editAllNum={editAllNum} editAllSum={editAllSum}/>)}
          </div>
          <div className="basket_all_cost_div">
            <p className='basket_all_cost_text'>Итого</p>
            <p className='basket_all_cost'>{allSum}</p>
          </div>
          <button className='delyvery_button'>Оформить заказ</button>
          <div className="delivery">
            <img src="../src/assets/Доставка.png" alt="" />
            <p className='delivery_text'>Бесплатная доставка</p>
          </div>
        </div>
        <div className='menu_of_burgers'>
        {burgers.map(item => <BurgerList allUsers={allUsers} setAllUsers={setAllUsers} {...item} key={item.id} allUsers={arrCardsList} addActiveUser={addActiveUser} handleOpenModal={handleOpenModal}/>)}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
