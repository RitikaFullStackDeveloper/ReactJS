

// import React from "react";
// import "./Actors.css";

// class Actors extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   // Button function to display player image and name
//   button = (actorImage, actorName) => {
//     return (
//       <div>
//         <div>
//           <img src={actorImage}
//           //  style={{ width: "20%", height: 100 }} 
//           />
//           <p>{actorName}</p>
//         </div>
//         {/* <button className="actor-button" style={this.props.Style}
//           onClick={() => console.log(`${actorName} button clicked`)}
//         >
        
//         </button> */}
//       </div>
//     );
//   };

//   render() {
//     return (
      
//       <div className="container">
//          <h1>Actors </h1>
       
      
//         {this.button("https://i.pinimg.com/236x/dc/5b/9e/dc5b9e847b734590d36a50cfc9e38e73.jpg","Saif Ali Khan"
//         )}
//         {this.button(
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X-3xp-H2-opEovu1WYZthPoglH8xGXHOrg&s", 
//           "Priyanka Chopra"
//         )}
//         {this.button(
//           "https://i.pinimg.com/474x/a9/e2/9f/a9e29fbed133d7835cda48df2d924f8b.jpg", 
//           "Kareena Kapoor"
//         )}
//         {this.button(
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HF1z6MP2jhaL1u_MKgbbeZjLeX7GOaJLe_6jsIPjq3PMo5bslcbUMhTRP0fM59329ZA&usqp=CAU", 
//           "Sidharth Malhotra"
//         )}
//         {this.button(
//           "https://i.pinimg.com/736x/cf/30/26/cf30264a3fd8c41b2eb811755f7757d9.jpg", 
//           "Kareena KApoor"
//         )}
//         {this.button(
//           "https://i.pinimg.com/originals/56/ff/cc/56ffcc6140b53765bd329092ad32c6f6.jpg", 
//           "deepika PAdukon"
//         )}
//         {this.button(
//           "https://i.pinimg.com/736x/29/84/43/29844332d4c5cadd1f067d368bd56d8b.jpg", 
//           "Amir Khan "
//         )}
//         {this.button(
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZzcBq2dQp7UZo7m5W_eT977-6qgXacl5cHoW5JJuwAm82TU_xCGwPDk_Dm0Cr0vyNB0&usqp=CAU", 
//           "Rohit Saraf"
//         )}
//         {this.button(
//           "https://freebollywoodsnaps.wordpress.com/wp-content/uploads/2016/01/a8f906efcc4cddfe12f99a434818caf2.jpg?w=768", 
//           "Alia Bhatt"
//         )}
//         {this.button(
//           "https://i.pinimg.com/736x/76/02/2b/76022b6d5d756ad1421765a626966a95.jpg", 
//           "Kiara Advani"
//         )}
//       </div>
      
//     );
//   }
// }

// export default Actors;



import React from "react";
import "./Actor.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovies: [], // State to hold the selected actor's movies
    };
  }

  // Function to handle click on an actor's image
  handleActorClick = (movies) => {
    this.setState({ selectedMovies: movies });
  };

  // Button function to display player image and name
  button = (actorImage, actorName, movies) => {
    return (
      <div>
        <div>
          <img
            src={actorImage}
            alt={actorName}
            onClick={() => this.handleActorClick(movies)} // Handle click
          />
          <p>{actorName}</p>
        </div>
      </div>
    );
  };

  render() {
    const { selectedMovies } = this.state;

    return (
      <div className="container">
        <h1>Actors List</h1>

        {/* Render actors */}
        {this.button(
          "https://i.pinimg.com/236x/dc/5b/9e/dc5b9e847b734590d36a50cfc9e38e73.jpg",
          "Saif Ali Khan",
          ["Dil Chahta Hai", "Omkara", "Kal Ho Naa Ho", "Hum Tum", "Tanhaji"]
        )}
        {this.button(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X-3xp-H2-opEovu1WYZthPoglH8xGXHOrg&s",
          "Priyanka Chopra",
          ["Barfi!", "Mary Kom", "Fashion", "The Sky Is Pink", "Don"]
        )}
        {this.button(
          "https://i.pinimg.com/474x/a9/e2/9f/a9e29fbed133d7835cda48df2d924f8b.jpg",
          "Kareena Kapoor",
          ["Jab We Met", "Tanu Weds Manu", "3 Idiots", "Heroine", "Veere Di Wedding"]
        )}
        {this.button(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HF1z6MP2jhaL1u_MKgbbeZjLeX7GOaJLe_6jsIPjq3PMo5bslcbUMhTRP0fM59329ZA&usqp=CAU",
          "Sidharth Malhotra",
          ["Student of the Year", "Shershaah", "Ek Villain", "Hasee Toh Phasee", "Kapoor & Sons"]
        )}
         {this.button(
           "https://i.pinimg.com/736x/76/02/2b/76022b6d5d756ad1421765a626966a95.jpg", 
          "Kiara Advani",
          ["Fugly", "MS Dhoni",  "Good Newwz", "Guilty", "Jugjugg Jeeyo"]
        )}

        {this.button(
          "https://freebollywoodsnaps.wordpress.com/wp-content/uploads/2016/01/a8f906efcc4cddfe12f99a434818caf2.jpg?w=768", 
            "Alia Bhatt",
          ["Student of the Year", "Razi", "Gangubai KAthiyawadi", "Badrinath Ki Dulhania,", "Rocky Aur Rani Kii Prem Kahaani"]
        )}

        {this.button(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HF1z6MP2jhaL1u_MKgbbeZjLeX7GOaJLe_6jsIPjq3PMo5bslcbUMhTRP0fM59329ZA&usqp=CAU",
          "Sidharth Malhotra",
          ["Student of the Year", "Shershaah", "Ek Villain", "Hasee Toh Phasee", "Kapoor & Sons"]
        )}

      {this.button(
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZzcBq2dQp7UZo7m5W_eT977-6qgXacl5cHoW5JJuwAm82TU_xCGwPDk_Dm0Cr0vyNB0&usqp=CAU", 
          "Rohit Saraf",
          ["Dear Zindagi", " Ludo ", " Kamali from Nadukkaveri", "The Sky Is Pink", " Mismatched"]
        )}

      {this.button(
           "https://i.pinimg.com/736x/29/84/43/29844332d4c5cadd1f067d368bd56d8b.jpg", 
           "Amir Khan ",
          ["3 Idiots", "Rang De Basanti", "Dangal", "Fanaa", "Talaash"]
        )}

        {this.button(
           "https://i.pinimg.com/originals/56/ff/cc/56ffcc6140b53765bd329092ad32c6f6.jpg", 
           "deepika PAdukon",
          ["Pathaan", "Goliyon Ki Raasleela Ram-Leela", "Happy New Year", "Bombay Talkies", "Main aurr Mrs. Khanna"]
        )}



        {/* Render selected actor's movies */}
        {selectedMovies.length > 0 && (
          <div className="movies">
            <h2>Top 5 Movies:</h2>
            <ol>
              {selectedMovies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default Actor;
