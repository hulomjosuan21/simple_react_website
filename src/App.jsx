import { useState } from "react";

export default function App(){
  const [value, setValue] = useState(0)
  
  return (
    <>
      <button onClick={() => setValue(value+1)}>{value}x</button>
    </>
  );
}