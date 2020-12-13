import React from "react";
import Recipe from "./Recipe";

function Menu({ recipes }) {
  return (
    <article>
      <header>
      <h1> REACTIFY &#9738; </h1>

      <nav>
        <a href="https://reactjs.org/">Overview</a>
        <a href="https://reactjs.org/">Track</a>
        <a href="https://reactjs.org/">Albums</a>
        <a href="https://reactjs.org/">Follow</a>
      </nav>





      <div class="header">

      </div>



        <h2>My Year Playlists</h2>


      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;
