const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'ketemuanyuk';

const express = require('express'),
    app = express(),
    routerUser = require('./routes/routerUser'),
    routerGallery = require('./routes/routerGallery'),
    routerOrder = require('./routes/routerOrder'),
    routerState = require('./routes/routerState'),
    port = 3000,
    cors = require('cors'),
    mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/ketemuanyuk', {
    useNewUrlParser: true
})

// mongoose.connect('mongodb+srv://afitra:afitra@lamaran-anzh1.mongodb.net/test?retryWrites=true', {
//     useNewUrlParser: true
// })
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extends: false
}))
app.use('/user', routerUser)
app.use('/state', routerState)
app.use('/order', routerOrder)
app.use('/gallery', routerGallery)
module.exports = app

app.listen(port, function () {
    console.log(`live on port ${port} ######*******`);
    console.log(`connect data base on ${dbName}  ######*******`);
})