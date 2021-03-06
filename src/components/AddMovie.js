import React from "react";
import serialize from "form-serialize";
import { Link } from "react-router-dom";
class AddMovie extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = serialize(event.target, { hash: true });
    this.props.onAddMovie(newMovie);
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputImage">Director</label>
              <input type="text" className="form-control" name="director" />
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Year</label>
              <input type="text" className="form-control" name="year" />
            </div>
            
            <div className="form-group col-md-8">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
              ></textarea>
            </div>
            <br />
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Add Movie"
          />

          <Link
            type="button"
            to="/"
            className="btn btn-md btn-dark"
            style={{ float: "right" }}
          >
            <b>Back</b>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddMovie;
