import React from "react";
import "./AddForm.css";

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: "",
            Duration: "",
            movieDirector: "",
            moviePoster: "", // New field for movie poster URL
        };
    }

    // Handle input changes
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // Handle form submission
    submitFunction = (event) => {
        event.preventDefault();
        const { movieName, Duration, movieDirector, moviePoster } = this.state;

        // Validate inputs before adding
        if (movieName.trim() && Duration.trim() && movieDirector.trim() && moviePoster.trim()) {
            this.props.addMovie({ movieName, Duration, movieDirector, moviePoster });

            // Reset form fields after submission
            this.setState({ movieName: "", Duration: "", movieDirector: "", moviePoster: "" });
        }
    };

    render() {
        return (
            <div className="form-container">

                <form className="form-box" onSubmit={this.submitFunction}>
                    <fieldset>

                        <input
                            type="text"
                            name="movieName"
                            value={this.state.movieName}
                            onChange={this.handleChange}
                            placeholder="Enter Movie Name"
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            name="moviePoster"
                            value={this.state.moviePoster}
                            onChange={this.handleChange}
                            placeholder="Enter Image URL"
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            name="Duration"
                            value={this.state.Duration}
                            onChange={this.handleChange}
                            placeholder="Enter Movie Duration"
                        />
                        <br />
                        <br />

                        <input
                            type="text"
                            name="movieDirector"
                            value={this.state.movieDirector}
                            onChange={this.handleChange}
                            placeholder="Enter Director Name"
                        />
                        <br />
                        <br />

                        <button className="submit-btn" type="submit">Add Movie</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}