const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true
    }
})