import React from "react";
import CardDisplay from "./CardDisplay";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    soccerData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        // console.log(response.data);
        this.setState({ soccerData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="allCardContainer">
          {this.state.soccerData.map((each) => (
            <CardDisplay
              key={each.id}
              name={each.name}
              country={each.country}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
