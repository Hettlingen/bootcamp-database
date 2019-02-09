/**
 * Created by martinbraun on 15.10.16.
 */

exports.findById = function(req, res) {
    var Partner = require('../model/partner');
    var uuid = req.params.uuid;

    console.log("Ein Partner gelesen");

    Partner.findOne({'uuid': uuid}, function(err, blog){
        console.log('Gefunden....');
        res.send(blog);
    });
};

exports.findAll = function(req, res) {
    var Partner = require('../model/partner');

    Partner.find({})
        .exec(function(error, listPartner) {
            if (error) { return next(error); };
            res.send(listPartner);
        })
};

exports.createPerson = function(req, res) {
    var partnerDatabaseService = require('../services/database/partner-service-mysql');

    // create new person
    var uuid;

    try {
        uuid = partnerDatabaseService.createPerson(request.body.lastName, request.body.lastName, request.body.gender, request.body.age, 1)
    } catch (error) {
        return response.status(409).send("Person konnte nicht angelegt werden" + error);
    }

    response.status(201).send(uuid);
};

exports.createInstitution = function(req, res) {
    var partnerDatabaseService = require('../services/database/partner-service-mysql');

    // create new person
    var uuid;

    try {
        uuid = partnerDatabaseService.createInstitution(request.body.companyName)
    } catch (error) {
        return response.status(409).send("Person konnte nicht angelegt werden" + error);
    }

    response.status(201).send(uuid);
};
