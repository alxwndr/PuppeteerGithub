const mongoose = require('mongoose');
const User = require('./user_model.js');

const db = mongoose.createConnection('mongodb://localhost:27017/myapp');
db.on('error', console.error.bind(console, 'connection error:'));

const e = db.once('open',function(){


    //Todo insert in the end
    //*
    const conditions = { email: nbUsers.email };
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	
	User.findOneAndUpdate(conditions, nbUsers, options, (err, users) => {
        if (err) throw err;
    }
     );
    




});