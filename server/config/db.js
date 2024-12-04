const mongoose = require('mongoose');
const { MONGOURI } = require('./prod');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);

        console.log('MongoDB Connected..');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
