import React from "react";
import SearchAppBar from "./SearchAppBar";
import Album from "./Album";

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    //State holds 3 properties
      //data = An array of image urls in data
      //searchTerm = Current search term, by default we look at dogs
      //pageNumber = What page is selected
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
    //Check whether we are updating the page or the search
      //If newSearch is an object, that means we are updating the page only
    if(typeof newSearch === "object"){
      //So we will need to keep the current search term
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