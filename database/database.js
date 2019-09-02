const mongoose = require('mongoose');

const setupDatabase = () => {
    const dbUrl = 'mongodb://localhost/';
    mongoose.connect(dbUrl);
    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });
};

module.exports = setupDatabase;