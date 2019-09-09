import React from "react";
import { Card } from "../Imports/imports";

function App() {
  return (
    <div>
      <Card
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          email: "mr.wiskerson@catnap.meow"
        }}
      />
    </div>
  );
}

export default App;
