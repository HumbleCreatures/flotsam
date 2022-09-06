import { useState } from "react";
import { Child } from "./child";

export function Parent() {
  const [stateChild, setStateChild] = useState({ name: 'init name' });

  return (
    <div>
      <button onClick={() => {
        stateChild.name = "update name";
        setStateChild(stateChild);
      }}>Update name</button>

      <button onClick={() => {
        setStateChild({ name: 'update reference' })
      }}>Update reference</button>
      <h1>Child </h1>
      <Child name="23" />
    </div>
  );
}
