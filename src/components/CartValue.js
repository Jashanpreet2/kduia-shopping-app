import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//TODO: check what happens if we directly use the CartValue from the context
const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {  
    return (total = total + (item.quantity * item.unitprice));
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Cart value: {Location}
        {totalExpenses}
      </span>
    </div>
  );
};

export default CartValue;
