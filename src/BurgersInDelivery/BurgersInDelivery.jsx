import "./BurgersInDelivery.css"

export default function BurgersInDelivery({name,img,cost,deliveryCost}){

console.log(cost);
function name2() {
    console.log(2312);
    deliveryCost = +deliveryCost + +cost
    console.log(deliveryCost);
}
name2()
if (name == undefined) {
    return;
  } else {
return(
    <div className="BurgersInDelivery_div">
        <img className="BurgersInDelivery_img" src={img} alt="" />
        <p className="BurgersInDelivery_p">{name}</p>
        
    </div>
)}
}