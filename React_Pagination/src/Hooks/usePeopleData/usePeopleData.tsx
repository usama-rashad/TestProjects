import React from "react";
import axios from "axios";

const URL = "https://randomuser.me/api/?results=50";

interface IPeopleDataProps {
  nextPage: boolean;
  userLength: number;
  pageNumber: number;
}

// Create user type
export type TUser = {
  title: string;
  firstname: string;
  lastname: string;
  email: string;
  thumbnail: string;
  city: string;
  country: string;
};

function usePeopleData() {
  const [userData, setUserData] = React.useState<TUser[]>([]); // All the data
  const [selectedData, setSelectedData] = React.useState<TUser[]>([]); // Only "userLength" records
  const [dataCount, setDataCount] = React.useState<number>(0);

  React.useEffect(() => {
    let data = userData.filter((value, index) => {
      return index >= 0 && index < 0 + dataCount;
    });
    console.log(`Total count ${userData.length}, selected data count ${selectedData.length}`);
    console.table(data);
    setSelectedData(data);
  }, [userData, dataCount]);

  const applyDataCount = (count: number) => {
    setDataCount(count);
  };

  // Get data effect
  React.useEffect(() => {
    axios
      .get(URL, { timeout: 1000 })
      .then((data: any) => {
        let simplifiedData: TUser[] = data.data.results.map((user: any) => {
          let { name, email, picture, location } = user;
          return {
            title: name.title,
            firstname: name.first,
            lastname: name.last,
            email: email,
            thumbnail: picture.thumbnail,
            city: location.city,
            country: location.country,
          };
        });
        setUserData(simplifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {
    userData,
    selectedData,
    applyDataCount,
  };
}

export default usePeopleData;
