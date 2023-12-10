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
      <div className="main">
      {menu.map(item => <MenuBlock {...item} key={item.id}/>)}
      </div>
      <p className='name_of_menu'>Бургеры</p>
    </div>
  )
}

export default App
