import React from "react";
import Recipe from "./Recipe";

function Menu({ recipes }) {
  return (
    <article>
      <header>
      <h1> REACTIFY &#9738; </h1>

      <nav>
        <a href="#">Overview</a>
        <a href="#">Track</a>
        <a href="#">Albums</a>
        <a href="#">Follow</a>
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
