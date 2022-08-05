import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/DogProvider";

function Favorites() {
  const [searchBreed, setSearchBreed] = useState("");

  const [state] = useFavorites();
  let { favorites } = state;

  const [render, setRender] = useState(false);

  console.log(favorites);

  return (
    <div className="app text-center">
      <Link to="/" className="link-router">
        Go to Home
      </Link>
      <input
        type="text"
        placeholder="Type a breed..."
        className="input"
        onChange={(event) => {
          setSearchBreed(event.target.value);
        }}
      />
      <div>
        {favorites
          .filter((val) => {
            if (searchBreed === "") {
              return val;
            } else if (
              val.toLowerCase().includes(searchBreed.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((img) => {
            return (
              <div className="item">
                <img
                  src={img}
                  width="200px"
                  height="200px"
                  alt="dogs"
                  style={{ padding: "10px 10px 0px 10px", cursor: "pointer" }}
                  onClick={() => {
                    favorites = favorites.splice(favorites.indexOf(img), 1);
                    setRender(!render);
                  }}
                  key={img}
                />
                <span className="caption">
                  {img.split("/breeds/")[1].split("/")[0]}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Favorites;
