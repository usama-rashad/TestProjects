import React, { useEffect, useState } from 'react'

export interface Person {
  id: number;
  name: string;
  age: number;
  email?: string;
}

export interface BasicProps {
  data : Person[];
}

function Basic(props: BasicProps) {
  const [data, setData] = useState<Person[]>([]);
  let newPeopleData: Person[] = []; // This line made the difference. Looks like the double mounting does not delete the previous memory allocation inside the component.
  console.log("Length @1:" + newPeopleData.length);

  useEffect(()=>{
    newPeopleData= [];
      for(let i=0;i<props.data.length;i++)
      {
          let newEmail = props.data[i].name + "@gmail.com"
          newPeopleData.push({ id: props.data[i].id, name: props.data[i].name, email: newEmail } as Person)
      }
      setData(newPeopleData);
      console.log("Ready.");
      console.log("Length @2:" + newPeopleData.length);
      return ()=>{
        setData([])
        console.log("Deleted");
        console.log("Length @3:" + newPeopleData.length);
      }
  },[]);
  
  return (
    <div>
      {data.map((unit) => {
        return (
          <h1 key={unit.id}>{unit.name},age:{unit.age},email:{unit.email}</h1>
        )
      })}
    </div>
  )
}

export default Basic