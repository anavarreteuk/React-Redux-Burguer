import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformIngredient = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr,el) => {
    return arr.concat(el)
  },[])
if (transformIngredient.length === 0) {
  transformIngredient = <p>Please add ingredients</p>
}

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
