

import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import random from "./random.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      clicked: false,
      message: "",
      random: random
    };
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.random.map(random => (
          <Card

            id={random.id}
            key={random.id}
            name={random.name}
            image={random.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
























// import React, { Component } from "react";
// import Card from "./components/Card";
// import './App.css';
// import random from "./random.json";

// class App extends Component {
//   state = {
//     random: random,
//     score: 0,
//     highScore: 0
//   };




//   render() {
//     return (
//       <div className="App">
//         <header className="App-header"></header>
//         {this.state.friends.map(random => (
//           <Card
//             id={random.id}
//             key={random.id}
//             image={random.image}
//             clickCount={this.clickCount}

//           />
//         ))}
//       </div>

//     );
//   }

// }
// export default App;
