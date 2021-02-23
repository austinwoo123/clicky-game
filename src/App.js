

import React, { Component } from "react";
import FriendCard from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import random from "./random.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    random: random
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.random.map(friend => (
          <FriendCard

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
