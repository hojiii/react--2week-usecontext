import React from 'react'
import { FamilyConText } from '../context/FamilyContext';
import Father from './Father';

//GF-> Child한테 어떤 정보를 알려줘서 Childrk스내용 출력하도록
function GrandFather() {
  const houseName = "스파르타"
  const pocketMoney = 10000;

  return <FamilyConText.Provider value={{
    houseName,
    pocketMoney,
  }}>
          <Father/>
        </FamilyConText.Provider>
  
  
}

export default GrandFather