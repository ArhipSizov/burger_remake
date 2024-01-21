import "./BurgersInDelivery.css"

export default function BurgersInDelivery({name,img}){

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