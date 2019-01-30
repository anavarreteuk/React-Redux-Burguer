import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformIngredient = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
