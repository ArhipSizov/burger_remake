import { useState } from 'react'
import MenuBlock from "./Menu/Menu"
import './App.css'
import arrCard from "./ListBurgers.json"

function App() {

  const MenuList = arrCard.Menu

  const arrCards = arrCard.allUsers

  const [menu] = useState(MenuList)
  if (!menu){
    return <h1>Eror404</h1>
  }

  const [burgers] = useState(arrCards)
  if (!burgers){
    return <h1>Eror404</h1>
  }

  console.log(menu);


  return (
    <div className="All">
      <div className="nav"></div>
      <div className="main">
      {menu.map(item => <MenuBlock {...item} key={item.id}/>)}
      </div>
      <p className='name_of_menu'>Бургеры</p>
      <div className="functions_in_all">
        <div className='basket'>
          <div className='basket_all_num'>
            <p></p>
            <div></div>
          </div>
          <div className="active_burgers"></div>
          <div className="basket_all_cost"></div>
          <button></button>
          <div className="delivery">
            <img src="../src/assets/Доставка.png" alt="" />
            <p>Бесплатная доставка</p>
          </div>
        </div>
        <div className='menu_of_burgers'></div>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
