/**
 * Created by martinbraun on 29.12.16.
 */
var mongoose = require('mongoose');
var options = { discriminatorKey: 'specificClass' };

var partnerSchema = new mongoose.Schema({
    uuid: { type: String, required: true },
    dateCreatedAt: { type: Date, default: Date.now},
    dateUpdatedAt: Date
}, options);

module.exports = mongoose.model('Partner', partnerSchema);