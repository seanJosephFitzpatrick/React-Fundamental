import React from "react";
import {
  HeaderClassComponent,
  GreetingClassComponent
} from "../Imports/imports";

function App() {
  return (
    <div>
      <HeaderClassComponent username="John Doe" />
      <GreetingClassComponent />
    </div>
  );
}

export default App;
