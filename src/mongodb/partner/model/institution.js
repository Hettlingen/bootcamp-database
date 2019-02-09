/**
 * Created by martinbraun on 29.12.16.
 */
var mongoose = require('mongoose');

var institutionSchema = new mongoose.Schema({
    nameCompany: { type: String, required: true},
    industrialSector: { type: String, required: true, enum: ['Industrie', 'Coiffeur', 'Restaurant'] }
});

module.exports = mongoose.model('Institution', institutionSchema);