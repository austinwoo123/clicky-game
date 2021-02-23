import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import randoms from "./random.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      highScore: 0,
      randoms: randoms
    };
  }

  // pictureClick = (id) => {
  //   const randoms = this.state.randoms;
  //   const clickRandom = randoms.filter((random) => random.id === id);
  //   if (clickRandom[0].clicked) {
  //     score = 0;
  //     console.log(score);


  //     for (let i = 0: i<randoms.length; i++) {

  //     }
  //   }

  // }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.randoms.map(randoms => (
          <Card

            id={randoms.id}
            key={randoms.id}
            name={randoms.name}
            image={randoms.image}

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
