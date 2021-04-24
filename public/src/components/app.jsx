import React from "react";
import SearchAppBar from "./SearchAppBar";
import Album from "./Album";

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    //State holds 3 properties
      //An array of image urls in data
      //Current search term
      //What results page is selected
    this.state = {
      data: ['https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg'],
      searchTerm: 'dog',
      pageNumber: 1,
    }
    this.changePictures = this.changePictures.bind(this);
  }

  componentDidMount () {
    this.changePictures(this.state.searchTerm, this.state.pageNumber);
  }

  changePictures (newSearch, newPage) {
    if(typeof newSearch === "object"){
      newSearch = this.state.searchTerm;
    }
      axios.get("http://localhost:3000/picFetch", {
        params: {
          searchTerm: newSearch,
          pageNumber: newPage
        }
      })
      .then((res) => {
        let imageUrls = res.data;
        console.log('before setting new state', newSearch, newPage);
        this.setState({
          data: imageUrls,
          searchTerm: newSearch,
          pageNumber: newPage
        })
      })
      .catch((err) => {
        console.log("hit an error: ", err)
      })
  }

  render () {
    return (
    <div>
      <SearchAppBar/>
      <Album value={this.state.data} handler={this.changePictures}/>
    </div>
    )
  }
}

export default App;