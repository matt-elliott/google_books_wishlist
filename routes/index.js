const path = require('path');

module.exports = (app) => {
  app.get('/search/', (req, res) => {
    res.send('searchy');
  });
  app.get('/saved/', (req, res) => {
    res.send('saved');
  });
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
  app.get('*', (req, res) => {
    res.send('it works');
    // res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
};