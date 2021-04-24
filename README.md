# flikrPics

Table of Contents
-----------------
- [Description](#Description)
- [Getting Started](#Getting-Started)
  * [Dependencies](#Dependencies)
  * [Set up](#Set-up)
  * [API key](#API-key)
- [Routes](#routes)
- [Project Version](#Project-Version)

Description
-----------
Flikr Pics brings forward all the best pictures based on what you want to see.
I utilized a material UI theme for the layout: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album

I chose Material UI because of both familiarity and ease of use since it has components for pagination and searching.

Getting Started
---------------
Instructions to get the project deployed locally.

### Dependencies
- Node.js v14.15.5

### Set up
1. Run `npm install` to install the neccesary dependencies.
2. Run `npm run dev-react` to compile all public files into a bundle.
3. Run `npm run dev-server` to serve up the files on port 3000

### API key
1. Get a Flikr API at https://www.flickr.com/services/api/
2. Generate a `config.js` file in the root directory.
3. Export out an object like so e.g. `{ "key": API_KEY }` where `API_KEY` is a string of your access key.

Routes
------
GET route for image search word

    "/picFetch"
    With two parameters: searchTerm and PageNumber


Project Version
---------------
### v0.1.0
1. Middle Search Bar is Functional
2. Pagination works with a pre-defined range to 5

Future Updates
1. Have Pagination reflect how many pages actually are available for each search
2. Get the search bar in the header to be functional
3. Show descriptions for each image and have them render full screen when clicked

