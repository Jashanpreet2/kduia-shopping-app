import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <CartValue></CartValue>
        <Location></Location>
        <ExpenseList></ExpenseList>
        <h1 style={{ textAlign: "center" }}>Add/Remove items</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemSelected></ItemSelected>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
