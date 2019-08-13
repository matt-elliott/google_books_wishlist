const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
require(path.join(__dirname,'/routes'))(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') { 
  app,use(express.static('client/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

app.listen(port, () => console.log('\n\n\nApp Live On Port: ', port, '\n\n\n'));