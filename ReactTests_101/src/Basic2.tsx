import React, { useEffect, useState } from 'react'

function Basic2() {

const [numbers,setNumbers] = useState<number>([]);


// Try with another example to see if moving the array out of the effect and triggering a useState update
// makes it work


useEffect(()=>{

},[])

  return (
    <div>{data}</div>
  )
}

export default Basic2