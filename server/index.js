const express = require('express');
const app = express();
const port = 3000
const axios = require('axios');
const api = require('../config.js')

app.use(express.static(__dirname + '/../public/dist'));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.get('/feed', (req, res) => {
  axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api.key}&tags=dogs&per_page=1`,
    {
      params: {
        format: "json",
        nojsoncallback: "?",
      },
    }
  )
  .then((apiResponse) => {
   // console.log(apiResponse);
  //We receive inside of photo an array of the photo results with 4 properties we need to pull out
    //photo id
    let id = apiResponse.data.photos.photo[0].id;
    //photo owner
    let owner = apiResponse.data.photos.photo[0].owner;
    //photo secret
    let secret = apiResponse.data.photos.photo[0].secret;
    //photo server
    let server = apiResponse.data.photos.photo[0].server;
    // console.log(id);
    // console.log(owner);
    // console.log(secret);
    // console.log(server);
    let imageLink = 'https://live.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
    res.end(imageLink);
  })
  .catch((err) => {
    console.log(err);
  })
})

app.listen(port, () => {
  console.log(`flikrPics app listening at http://localhost:${port}`)
})