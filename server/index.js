const express = require('express');
const app = express();
const port = 3000
const axios = require('axios');
const api = require('../config.js')

app.use(express.static(__dirname + '/../public/dist'));

app.get('/picFetch', (req, res) => {

  axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api.key}&tags=${req.query.searchTerm}&per_page=15&page=${req.query.pageNumber}`,
    {
      params: {
        format: "json",
        nojsoncallback: "?",
      },
    }
  )
  .then((apiResponse) => {
    //We receive inside of 'photo' an array of 15 images with 4 properties we need to pull out
    imageList = apiResponse.data.photos.photo.map( (node) => {
       //photo id
       let id = node.id;
       //photo owner - this would be good to expand the project by showing author info, but not necessary for v1
       let owner = node.owner;
       //photo secret
       let secret = node.secret;
       //photo server
       let server = node.server;
       //combine server, secret, and photo id to put together the image url
       let imageUrl = 'https://live.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
       return imageUrl;
   })
   //send the array of urls back to our client
    res.send(imageList);
  })
  .catch((err) => {
    console.log(err);
  })
})

app.listen(port, () => {
  console.log(`flikrPics app listening at http://localhost:${port}`)
})