import React, { Component } from "react";

const MyContext = React.createContext();

export class Provider extends Component {
  state = {
    motd: "This is cthipp's Boilerplate",
    motdBank: [
      "Welcome to the app!",
      "Hi, this is my app!",
      "Welcome to the app my dude!",
    ],
  };

  // class prop
  prevPlayerId = 4;

  // example function
  handleMOTDchange = () => {
    const rng = Math.floor(Math.random() * this.state.motdBank.length);
    this.setState((prevState) => ({
      motd: this.state.motdBank[rng],
    }));
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          motd: this.state.motd,
          actions: {
            handleMOTDchange: this.handleMOTDchange,
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export const Consumer = MyContext.Consumer;
