import React, { Component } from "react";

const MyContext = React.createContext();

export class Provider extends Component {
  state = {
    motd: "",
    motdBank: [
      "This is cthipp's Boilerplate",
      "Welcome to the app!",
      "Hi, this is my app!",
      "Welcome to the app my dude!",
    ],
    currentMOTD: 0,
  };

  // class prop
  prevPlayerId = 4;

  // example function
  handleMOTDchange = () => {
    const rngInit = Math.floor(Math.random() * this.state.motdBank.length);
    this.setState((prevState) => {
      const rng = this.handleDupes(rngInit, prevState.currentMOTD);
      return {
        currentMOTD: rng,
        motd: this.state.motdBank[rng],
      };
    });
  };

  handleDupes = (num, prevNum) => {
    if (num != prevNum) {
      return num;
    } else {
      const num = Math.floor(Math.random() * this.state.motdBank.length);
      return this.handleDupes(num, prevNum);
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          motd: this.state.motdBank[this.state.currentMOTD],
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
