import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h3>{name}</h3>
      <IngredientsList list={ingredients} />
      <Instructions title="About Songs" steps={steps} />
    </section>
  );
}

export default Recipe;
