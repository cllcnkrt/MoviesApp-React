import React from "react";
import {Link} from 'react-router-dom';
const MovieList = (props) => {

  const truncateOverview = (string, maxLength) =>{
    if(!string) return null;
    if(string.length <= maxLength) return string;
    return `${string.substring(0,maxLength)}...`
  }


  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <br />
          <div className="card mb-4 shadow-sm  ">
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="sample card"
            />
            <div className="card-body">
      
              <div class="d-flex justify-content-between"> <h5 className="card-title">{movie.name}</h5> <h5 className="card-title">{movie.year}</h5></div>

              <p className="card-text">{truncateOverview(movie.overview,150)}</p>
              <p className="card-text">
                <b>Director: </b>
                <i>{movie.director}</i>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={(event) => props.deleteMovieProp(movie)}
                  type="button"
                  className="btn btn-md btn-danger"
                >
                  <b>Delete</b>
                </button>

                <Link type="button" className ="btn btn-md btn-info" to ={`edit/${movie.id}`}>
                  <b>Edit</b>
                </Link>
                <h2>
                  <span className="badge bg-warning" color="red">
                    {movie.rating/10/2 }
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
