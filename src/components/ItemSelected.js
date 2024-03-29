import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ItemSelected = (props) => {
  const { expenses, dispatch } = useContext(AppContext);

  const [name, setName] = useState("Shirt");
  const [quantity, setQuantity] = useState("0");
  const [action, setAction] = useState("Add");

  const submitEvent = (e) => {
    e.preventDefault();

    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    console.log(action);

    if (action === "Reduce") {
      console.log("reducing")
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "500px",
        }}
        onSubmit={submitEvent}
      >
        <select
          name="Item-name"
          id="Item-name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        >
          {expenses.map((expense) => (
            <option key={expense.id} value={expense.name}>
              {expense.name}
            </option>
          ))}
        </select>
        <select
          name="Action-type"
          id="Action-type"
          onChange={(e) => setAction(e.target.value)}
          defaultValue={action}
        >
          <option value="Add">Add</option>
          <option value="Reduce">Reduce</option>
        </select>
        <input
          name="Quantity"
          id="Quantity"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          required
          placeholder="Enter quantity "
        ></input>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemSelected;
