import React from 'react'

export interface IChild {
  name : string;
}

function Children(inputs : IChild) {

  console.log(inputs.name);
  return (
    <div>
      <h4>{`This is a child. Name : ${inputs.name}`}</h4>
    </div>
  )
}

export default Children