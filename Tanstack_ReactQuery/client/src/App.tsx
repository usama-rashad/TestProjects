import "./App.scss";

import React, { useEffect } from "react";
import { ButtonGroup, Button, CircularProgress } from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";

import axios from "axios";
import DataRow, { DataRowProps } from "./components/DataRow/DataRow";
import DataContextConsumer from "./components/DataContextConsumer/DataContextConsumer";
import { DataContextProvider, TDataContext } from "./contexts/DataContext";
import DataTable from "./components/DataTable/DataTable";

//Hooks

const test: TDataContext = { data: [{ name: "usama", age: 34, id: "lalalla" }] };

export type User = {
  name: string;
  id: string;
  age: number;
};

function createString(length: number): string {
  let s: String = "";
  for (let i = 0; i < length; i++) {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    s += letter;
  }
  return s.toString();
}

function createNewUser() {
  let name = createString(5);
  let randomnAge = Math.floor(Math.random() * 100);
  return { name: name, age: randomnAge, id: name.toString() + randomnAge.toString() };
}

async function getData() {
  return axios.get("http://127.0.0.1:5000/getAdmins");
}
async function setNewAdmin(admin: User) {
  return axios.post("http://127.0.0.1:5000/setAdmin", { adminUser: admin });
}

function App() {
  const { isPending, isFetching, isError, data, error, refetch } = useQuery({
    // refetchInterval: 5000,
    queryKey: ["getAdmins"],
    queryFn: getData,
  });
  const {
    isIdle,
    isPaused,
    isSuccess,
    isPending: isMutatePending,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation({
    mutationFn: setNewAdmin,
    onSuccess: () => {
      mutationSuccess();
    },
  });

  const fetchData = () => {
    refetch();
  };

  const mutationSuccess = () => {
    fetchData();
    focusLastRow();
  };

  useEffect(() => {
    setTimeout(() => {
      focusLastRow();
    }, 1000);
  }, [data]);

  const focusLastRow = () => {
    let listOfRows = document.getElementsByClassName("dataRow table1");
    let rowCount = listOfRows.length;
    listOfRows[rowCount - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div className="app">
      <div className="left">
        <div className="topBlank"></div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={fetchData} sx={{ fontWeight: "600" }}>
            Get
          </Button>
          <Button
            sx={{ fontWeight: "600" }}
            disabled={isMutatePending}
            onClick={() => {
              mutate(createNewUser());
            }}
          >
            Set
          </Button>
        </ButtonGroup>
        {isFetching && (
          <div className="loader">
            <CircularProgress sx={{ color: "white" }} size={"2rem"} />
          </div>
        )}
        {!isFetching && (
          <div className="dataDisplay">
            {data?.data.data.map((user: User, index: number) => {
              return <DataRow<User> key={index} data={user} index={index} rowHash="table1" />;
            })}
          </div>
        )}
      </div>
      <div className="right">
        {/* <DataContextProvider></DataContextProvider> */}
        <DataTable<User> scrollToEnd={false} data={test.data} RowTemplate={DataRow<User>} />
      </div>
    </div>
  );
}

export default App;
