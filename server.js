const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') { 
  app,use(express.static('client/build'));
}

app.listen(port, () => console.log('\n\n\nApp Live On Port: ', port, '\n\n\n'));