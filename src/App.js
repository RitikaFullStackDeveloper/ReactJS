// ----(class base)
// import React from "react";
// import Amazon from "./Components/Amazon";


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <Amazon/>

//     </div>
//   );
// }

// export default App;


// -----------fruits.js-------------
// import React from "react";
// import Fruits from "./Components/Fruits";


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <Fruits/>

//     </div>
//   );
// }

// export default App;

// -------------fruits.js end---------------

// -------------Amazon.js (Function base)---------------

// import React from "react";
// import AmazonF from "./Components/AmazonF";


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <AmazonF/>

//     </div>
//   );
// }

// export default App;

// -----------------------------(function base end)----------

// -------------------four seperate file----------------
// -----amazon.js-------------------------
// import React, { useState } from "react";
// import "./App.css";
// import  Header  from './ComponentsTwo/Header';
// import Panel from './ComponentsTwo/Panel';

// function App() {
//   const [counter, setCounter] = useState(0);

//   const addToCart = () => {

//     setCounter(counter + 1);
//   };

//   return (
//     <div className="App">
//       <Header counter={counter} />
//       <Panel addToCart={addToCart} />
//     </div>
//   );
// }

// export default App;
// -------end counter-----------

// ------------AmazonTwo-----------------------------
// import React, { Component } from "react";
// import "./App.css";
// import Header from "./ComponentsTwo/Header";
// import Panel from "./ComponentsTwo/Panel";
// import products from "./ComponentsTwo/data"; 

// export default class Amazon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: products,
//       cartArray: [],
//       counter : 0
//     };
//   }



//   addToCart = (data) => {
//     this.setState({ cartArray: [...this.state.cartArray, data] });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Header cartCount={this.state.cartArray.length} />
//         <Panel data={this.state.products} addToCart={this.addToCart} />
//       </div>
//     );
//   }
// }
// -------------amazon end-------------------------


// // ----(class base)
// import React from "react";
// // import CoinHomePage from "./Coins/CoinHomePage";
// // import HomePageAmazon from "./Amazon/HomePageAmazon"
// import Dashboard from "./Dashboard"
// // import Actor from "./ActorMovies/Actor"
// //  import ImdbDashboard from './IMDb/ImdbDashboard';


// import './App.css';

// function App() {
//   return (
//     <div className="App">
// {/* <CoinHomePage/> */}
// {/* <HomePageAmazon/> */}
//       <Dashboard />
//       {/* <Actor/> */}
//       {/* <ImdbDashboard/> */}
//     </div>
//   );
// }

// export default App;
