import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function MyResepient():JSX.Element {
  const user = useSelector((store: RootState) => store.userReducer.user);
  
  return(
    <>
      <div className="RespientContainer">
        <p>{user.name}</p>
        <p>{user.description}</p>
      </div>
    </>
  );
}

export default MyResepient;