import { ChangeEvent, useEffect, useState } from "react";
import { RootState, appDispatch, store } from "./store";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { reset, registerThunk, IRegisterUser } from "./registerSlice";
import { addDoc } from "@firebase/firestore";
import { useAppSelector } from "./hooks";

function App() {
  const [userData, setUserData] = useState<IRegisterUser>({ username: "", password: "" });
  const dispatch = useDispatch<appDispatch>();
  const storeState = useAppSelector((state) => state);

  const addUserAction = () => {
    dispatch(registerThunk(userData));
  };

  useEffect(() => {
    setUserData({ username: "usamakr@gmail.com", password: "123456798" });
  }, []);

  const updateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    return { ...userData, username: e.target.value };
  };

  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    return { ...userData, updatePassword: e.target.value };
  };

  return (
    <div className="App">
      <input placeholder="Username" value={userData.username} onChange={updateUsername} />
      <input placeholder="Password" value={userData.password} onChange={updatePassword} />
      <button onClick={addUserAction}>Register</button>
      <span className="message">{JSON.stringify(storeState)}</span>
    </div>
  );
}

export default App;
