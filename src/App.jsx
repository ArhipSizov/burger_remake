import { useState } from 'react'
import MenuBlock from "./Menu/Menu"
import './App.css'
import arrCard from "./ListBurgers.json"
import BurgerActive from "./BurgerActive/BurgerActive"
import BurgerList from "./BurgerList/BurgerList"

function App() {

  const MenuList = arrCard.Menu

  const arrCardsList = arrCard.allUsers

  const arrCardsActive = arrCard.activeUser

  const [active, setActiveUsers] = useState(arrCardsActive)
  if (!active){
    return <h1>Eror404</h1>
  }

  const [menu] = useState(MenuList)
  if (!menu){
    return <h1>Eror404</h1>
  }

  const [burgers, setAllUsers] = useState(arrCardsList)
  if (!burgers){
    return <h1>Eror404</h1>
  }

  const [allNum, setNum] = useState(2);
  function editAllNum(amper) {
      setNum(allNum + amper)
  }

  const [allSum, setSum] = useState(425);
  function editAllSum(amper2) {
    setSum(allSum + amper2)
}

function addActiveUser(user){
  console.log(user.cost);
  const truUser = active.find((item) => item === user);
  console.log(4343);
  if (truUser) return;
  editAllSum(+user.cost);
  editAllNum(+1);
  console.log(23);
  const lastid = active[active.length - 1].id;
  console.log(lastid);
  user.id = lastid + 1;
  setActiveUsers((prevState) => [...prevState, user]);
}

const [shoeModal,setShowModal] = useState("faulse");
const[indexUserrModal,setIndexUserModal] = useState(0)

function handleOpenModal(id){
  setShowModal(true)
  setIndexUserModal(id - 1);
}

function delCards(id) {
  const copyBurgersArr = [...active]
  const newBurgersArr = copyBurgersArr.filter(item => item.id != id)
  console.log(newBurgersArr);
  setActiveUsers(newBurgersArr)
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
          {active.map(item => <BurgerActive {...item} key={item.id} editAllNum={editAllNum} editAllSum={editAllSum} delCards={delCards}/>)}
          </div>
          <div className="basket_all_cost_div">
            <p className='basket_all_cost_text'>Итого</p>
            <p className='basket_all_cost'>{allSum}р</p>
          </div>
          <button className='delyvery_button'>Оформить заказ</button>
          <div className="delivery">
            <img src="../src/assets/Доставка.png" alt="" />
            <p className='delivery_text'>Бесплатная доставка</p>
          </div>
        </div>
        <div className='menu_of_burgers'>
        <BurgerList allUsers={burgers} setAllUsers={setAllUsers} addActiveUser={addActiveUser} handleOpenModal={handleOpenModal}/>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
