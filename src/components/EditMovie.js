import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
    director: "",
    year: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await axios.get(`http://localhost:3002/movies/${id}`);

    this.setState({
      name: response.data.name,
      rating: response.data.rating,
      overview: response.data.overview,
      imageURL: response.data.imageURL,
      director: response.data.director,
      year: response.data.year,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Edit The Form To Update The Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
              />
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputImage">Director</label>
              <input
                type="text"
                className="form-control"
                name="director"
                value={this.state.director}
              />
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Year</label>
              <input
                type="text"
                className="form-control"
                name="year"
                value={this.state.year}
              />
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputName">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
              />
            </div>
           
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
              ></textarea>
            </div>
            <br />
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="  Edit  "
          />

          <Link
            type="button"
            to="/"
            className="btn btn-md btn-secondary"
            style={{ float: "right" }}
          >
            <b>Cancel</b>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditMovie;
