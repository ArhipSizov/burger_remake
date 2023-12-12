import './BurgerActive.css';
import { useState } from 'react'

export default function BurgerActive({delCards,img, name, weight, cost,id,editAllNum,editAllSum}){

    const [num,setNum] = useState(1)
    const [sum,setSum] = useState(0)


    function editBut(amper) {
        if (String(amper) === "-1" && num === 0){
            delCards(id);
            const result2 = sum
            editAllSum(0)
            setSum(result2)
            return
        }
      const result = num + amper
      editAllNum(amper)
      setNum(result)
    }
    function editBut2(amper) {
        let cost2 = -cost
        if (String(amper) === cost2 && sum === 0){
            

                return
              }
      const result2 = sum + amper
      editAllSum(amper)
      setSum(result2)
    }

    return(
        <div className='one_burger'>
            <img className='img_of_burger' src={img} alt="" />
            <div className='components'>
                <p>{name}</p>
                <p>{weight}г</p>
                <p>{cost}р</p>
            </div>
            <div className='num_of_burgers_div'>
                <img onClick={() => {
          editBut2(-cost);
          editBut(-1);
        }} className='plus_or_minus' src="../src/assets/minus.svg" alt="" />
                <p className='num_of_burgers'>{num}</p>
                <img onClick={() => {
          editBut2(+cost);
          editBut(+1);
        }} className='plus_or_minus' src="../src/assets/plus.svg" alt="" />
            </div>
        </div>
    )
}