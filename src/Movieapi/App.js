import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./index.css";

const App = () => {
  const [moviedata, setMoviedata] = useState([]);
  const fetchMovieApi = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviedata(data.results);
      });
  };

  useEffect(() => {
    fetchMovieApi();
  }, []);
  return (
    <div className="home">
      {moviedata &&
        moviedata.length > 0 &&
        moviedata.map((value, index) => (
          <>
            <div className="card">
              <div className="imagediv">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${value.poster_path}`}
                />
                <div className="name">
              <h3>Overview</h3>
              <p>{value.overview}</p>
              <h5>{value.release_date}</h5>
            </div>
              </div>
            </div>
            
          </>
        ))}
    </div>
  );
};
export default App;
