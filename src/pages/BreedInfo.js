import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../context/DogProvider";

function BreedInfo() {
  const [images, setImages] = useState([]);
  const [state] = useFavorites();
  const { favorites } = state;

  let navigate = useNavigate();

  let location = useLocation();
  const currentLocation = location.pathname;
  const URL = `https://dog.ceo/api${currentLocation}/images`;

  const fetchImages = () => {
    axios.get(URL).then((response) => {
      setImages((prev) => [...response.data.message]);
    });
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(URL);
  return (
    <div className="app text-center">
      <Link to="/" className="link-router">
        Go to Home
      </Link>
      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          navigate("/favorites");
        }}
      >
        Favorites ❤️
      </button>
      <div>
        {images.map((img) => {
          return (
            <>
              <img
                src={img}
                width="200px"
                height="200px"
                alt="dogs"
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => {
                  if (!favorites.includes(img)) {
                    favorites.push(img);
                  } else {
                    favorites.splice(favorites.indexOf(img), 1);
                  }
                }}
                key={img}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default BreedInfo;
