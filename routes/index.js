const path = require('path');
const axios = require('axios');

module.exports = (app) => {
  // app.get('/', async ({params}, res) => {
  //   console.log('home');
    // let queryString = params;
  //   let queryString = '1984';
    // let query = `https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=${process.env.GOOGLE_API_KEY}`;
  //   let query = `https://www.googleapis.com/books/v1/volumes?q=1984&key=AIzaSyC_VEZtJe3S1X4Hveh4LB385ZdLBTmnWf0`;

  //   try {
  //     let response = await axios.get(query);  
  //     console.log(response);
  //     res.send(response);
  //   } catch (error) {
  //     console.log('error !', error);
  //   }
  // });
  // app.get('/saved/', (req, res) => {
  //   res.send('saved');
  // });
  app.post('/api/savebook/', (req, res) => {
    //   {
    //     "title"
    
    //     "author"
    
    //     "description"
    
    //     "image"
    
    //     "link"
    
    // }
    res.send('save book');
  });
  app.post('/api/books', (req, res) => {
    res.send('gettin books');
  });
  app.post('/api/deletebook/:id', (req, res) => {
    res.send('delete param');
  });
};