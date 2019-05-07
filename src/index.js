import React from "react";
import ReactDOM from "react-dom";
import { View, Button } from "react-native";

import "./styles.css";

function App() {
  return (
    <View>
      <Button title="hello world" />
    </View>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
