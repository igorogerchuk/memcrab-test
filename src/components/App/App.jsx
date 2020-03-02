import React from "react";
import Inputs from "../Inputs/Inputs";
import Array from "../Array";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.container}>
    <Inputs />
    <Array />
  </div>
);

export default App;
