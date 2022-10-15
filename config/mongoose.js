const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL ||'mongodb://localhost/EmployeeReviewSystem',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error connection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db; 