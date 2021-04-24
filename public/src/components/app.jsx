import React from "react";
//import SearchPhotos from "./components/searchPhotos.js.js"
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg'
    }
  }

  componentDidMount () {
    axios.get("http://localhost:3000/feed")
      .then((res) => {
        //console.log("what we got from server", res);
        let answer = res.data;
        this.setState({
          data: answer
        })
      })
      .catch((err) => {
        console.log("hit an error: ", err)
      })
  }

  render () {
    return (
    <div className="App">
      <div className="container">
        <h1 className="title">Flikr Photo Search</h1>
        {/* <SearchPhotos /> */}
      </div>
      <p></p>
      <img src={this.state.data}/>
    </div>
    )
  }
}

export default App;