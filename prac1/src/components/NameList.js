import React from 'react'
import Person from './Person';

function NameList() {
    const names = ["Yogesh", "Aalok", "Sarthak"];
    const nameList = names.map((name, index) => <Person key = {index} name = {name}></Person>);
  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameList
