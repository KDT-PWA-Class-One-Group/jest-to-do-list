import React, {useState} from "react";
const CheckedItem = ({item}) => {

  const [isChecked, setIsChecked]= useState(true)

  const handleInput = () => {
    setIsChecked(false)
  }

  return(
  <div>
    <input type="checkbox" checked={isChecked} onChange={handleInput}/>
    <p>{item.title}</p>
    <p>{item.update_at}</p>
  </div>);
}

export default CheckedItem;