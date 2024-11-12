import React, {useState} from "react";
import formatDate from "../utils/formatDate"
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
    <p>{formatDate(new Date(item.updated_at))}</p>
  </div>);
}

const CheckedList = ({data, changeData}) => {

  const handleButton = () => {
    changeData(data.filter(item => item.checked === false));
  }

  const toggleCheckbox = (id) => {
    const origin = [...data]
    const target = origin.find(e => e.id === id);
    target.checked = !target.checked;

    changeData(origin);
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
