import "./BurgersInDelivery.css"

export default function BurgersInDelivery({name,img,cost,weight}){

if (name == undefined) {
    return;
  } else {
return(
    <div>
        <img className="BurgersInDelivery_img" src={img} alt="" />
        <p>{name}</p>
        <p>{cost}р</p>
        <p>{weight}г</p>
        
    </div>
)}
}