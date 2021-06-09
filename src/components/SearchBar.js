import React from "react";
import {Link} from 'react-router-dom';



class SearchBar extends React.Component {
  
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div><br />
      <h1>MOVIE APP</h1>
      <form onSubmit={this.handleFormSubmit}>
        <div className="row g-3">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            
            />
          </div>
          <div className=" col-2">
            <Link type = "button"
            to ="/add"
            className ="btn btn-md btn-warning"
            style = {{float: "right"}}
            >
              <b>Add Movie</b>
            </Link>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;
