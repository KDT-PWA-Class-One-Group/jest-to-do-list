import React, {useState} from "react";
const CheckedItem = ({item, onChangeCheck}) => {

  const [isChecked, setIsChecked]= useState(true)

  const handleInput = () => {
    onChangeCheck(item.id);
    setIsChecked(false);
  }

  return(
  <div id={item.id}>
    <input type="checkbox" checked={isChecked} onChange={handleInput}/>
    <p>{item.title}</p>
    <p>{item.updated_at}</p>
  </div>);
}

// export default CheckedItem;

const CheckedList = ({data, changeData}) => {

  const handleButton = () => {
    changeData(data.filter(item => item.checked === false));
  }

  const toggleCheckbox = (id) => {
    const rest = data.filter(e => e.id !== id);
    const target = data.find(e => e.id === id);
    target.checked = !target.checked;

    const newArr = [...rest, target];

    changeData(newArr)
  }

  return(
    <>
    {data.filter(item => item.checked ===true).map(item=> {
      return(<CheckedItem key={item.id} item={item} onChangeCheck={() => toggleCheckbox(item.id)}/>)
      })
    }
      <button onClick={handleButton}>완료된 항목 지우기</button>
    </>
    );
}

export default CheckedList
