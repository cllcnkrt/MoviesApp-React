import React from "react";

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
            <button type = "button"
            className ="btn btn-md btn-outline-warning"
            style = {{float: "right"}}
            >
              <b>Add Movie</b>
            </button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;
