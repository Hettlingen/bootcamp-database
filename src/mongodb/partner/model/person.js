/**
 * Created by martinbraun on 29.12.16.
 */
var mongoose = require('mongoose');
var partner = require('nodejs-backend-typescript/src/mongodb/partner/model/partner');
var options = { discriminatorKey: 'specificClass' };

var personSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number,
    gender: { type: String, required: true, enum: ['MALE', 'FEMALE'] }
}, options);

module.exports = partner.discriminator('Person', personSchema);