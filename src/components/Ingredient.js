import React from "react";

export default function Ingredient({ name, artist }) {
  return (
    <li>
      {name} {artist}
    </li>
  );
}
