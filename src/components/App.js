import "../css/App.css";
import { Consumer } from "./Context";
import Duck from "../images/duck.gif";

const App = () => {
  return (
    <Consumer>
      {(context) => (
        <div className="App">
          <header className="App-header">
            <img src={Duck} alt="duck walking" />
            <p>
              {context.motd}
            </p>
            <button onClick={() => context.actions.handleMOTDchange()}>
              Change MOTD
            </button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )}
    </Consumer>
  );
};

export default App;
