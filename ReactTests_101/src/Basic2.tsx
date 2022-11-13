import React, { useEffect, useState } from 'react'

function Basic2() {

const [title,setTitle] = useState("Start")


// Try with another example to see if moving the array out of the effect and triggering a useState update
// makes it work


useEffect(()=>{
  setTitle("Title has been changed.")
},[])

  return (
    <div>{title}</div>
  )
}

export default Basic2


// To confirm:
// 1) setState is actually what tells react to re-redner the page.
// 2) memory scope deletion is what removes the previous entries of the array