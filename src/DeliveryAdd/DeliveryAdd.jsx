import "./DeliveryAdd.css"
import BurgersInDelivery from "../BurgersInDelivery/BurgersInDelivery"

export default function DeliveryAdd({setShowModal2, active}) {

console.log(active);
    return (
        <div className="DeliveryAdd" onClick={()=>setShowModal2(false)}>
            <div className="DeliveryAdd_div" onClick={(e)=>{e.stopPropagation()}}>
            {active.map((item) => (
            <BurgersInDelivery {...item} key={item.id} />
          ))}
            </div>
        </div>
    )
}