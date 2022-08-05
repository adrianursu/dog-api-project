import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [dogs, setDogs] = useState([]);
  let navigate = useNavigate();

  const URL = "https://dog.ceo/api/breeds/list/all";

  const fetchData = () => {
    axios.get(URL).then((response) => {
      for (var a in response.data.message) {
        if (response.data.message[a].length !== 0)
          for (var b of response.data.message[a]) dogs.push(a + "/" + b);
        else dogs.push(a);
        setDogs((prev) => [...dogs]);
      }
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="text-center">
        <h3>Dogs Breeds 🐕</h3>

        <button
          onClick={() => {
            navigate("/favorites");
          }}
        >
          Favorites ❤️
        </button>
      </div>
      <ol>
        {dogs.map((dog) => (
          <Link to={`/breed/${dog}`} className="link-router" key={dog}>
            {" "}
            <li key={dog}>{dog}</li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default Home;
