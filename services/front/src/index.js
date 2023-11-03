import ReactDOM from "react-dom";
import Table from "./table";
import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {

  return (
    <div className="App">
      <div className="heading">Lista de Logs</div>
      <Table  />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
