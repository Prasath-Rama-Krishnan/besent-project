import { useState } from "react";
import ComB from "./ComB";
import UserContext from "./UserContext";
function ComA() {
  const [name,setName]=useState('zhangsan');
  return (
    <div>
    <UserContext.Provider value={name}>
      <h1>ComA</h1>
      <ComB />
    </UserContext.Provider>
    </div>
  );
}   
export default ComA;