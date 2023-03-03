import React, { useContext } from 'react'
import { FamilyConText } from '../context/FamilyContext';

const style = {
  color : 'red',
  fontweight: '900'
}

function Child() {
  const data = useContext(FamilyConText);
  console.log("data",data)
  return (
    <div>
      나는 우리집 막내
      <br/>
      할아버지가 우리 집의 이름은 <span style={style}>{data.houseName}</span>이래
      <br/>
      게다가 용동도 <span style={style}>{data.pocketMoney}</span>원 만큼 줬어
    </div>
  );
}

export default Child