import React, {useEffect, useState} from "react";
const CheckedItem = (item, onChangeCheck) => {

  const [isChecked, setIsChecked]= useState(true)

  const handleInput = () => {
    setIsChecked(false)
    // item.checked = false
  }

  return(
  <div id={item.id}>
    <input type="checkbox" checked={isChecked} onChange={handleInput}/>
    <p>{item.title}</p>
    <p>{item.update_at}</p>
  </div>);
}

// export default CheckedItem;

const CheckedList = (data, changeData) => {

  const handleButton = () => {

  }

  const toggleCheckbox = (id) => {
    const rest = data.filter(e => e.id !== id);
    const target = data.fild(e => e.id === id);
    target.checked = !target.checked;

    const newArr = [...rest, target];

    changeData(newArr)
  }

  return(
    <>
    {data.filter(item => item.checked ===true).map(item=> {
      return(<CheckedItem item={item} onChangeCheck={toggleCheckbox}/>)
      })
    }
      <button onClick={handleButton} />
    </>
    );
}

export default CheckedList
