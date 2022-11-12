import React, { useEffect, useState } from 'react'

export interface Person {
    id      : number;
    name    : string;
    age     : number;
    email?  : string;
}


function Basic(input: Person[]) {
  let newPeopleData : Person[] = [];
  const [data,setData] = useState<Person[]>([]);

  useEffect(()=>{
    // Create a new data array 
    let data : Person[] = Object.values(input);
    let size : number = Object.values(input).length;

    console.log("Data load start." + JSON.stringify(data));
    for(let index=0;index<size;index++)
    {
        let {id,name,email} = input[index] as Person;
        let newEmail = name + "@gmail.com"
        newPeopleData.push({id:id,name:name,email:newEmail} as Person)
    }
    setData(newPeopleData);
    console.log("Data loaded." + JSON.stringify(data));
    return ()=>{
        console.log("Data deleted." + JSON.stringify(data));
    }
  },[]);


  return (
    <div>
        {data.map((unit)=>{
            return (
                <h1 >{unit.name},age:{unit.age},email:{unit.email}</h1>
            )
        })}
    </div>
  )
}

export default Basic