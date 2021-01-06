const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password:String,
    registerDate: Date,
    verified: String,
    verifiedPhone: String
});

mongoose.model('registration', registrationSchema);