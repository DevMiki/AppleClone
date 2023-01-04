const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//per i file statici
app.use(express.static('src'))
app.use('/css', express.static(__dirname + '/src/assets/css'))
app.use('/images', express.static(__dirname + '/resources/images'))
app.use('/js', express.static(__dirname + '/src/assets/js'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('/src/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});