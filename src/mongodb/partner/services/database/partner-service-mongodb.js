exports.createPerson = function(lastName, firstName, gender, age, roleType) {
    var PersonModel = require('../model/person');

    console.log("Erstellen Person wird durchgeführt");

    var person = new PersonModel({
        uuid: uuidGenerator.v4,
        gender: gender,
        lastName: lastName,
        firstName: firstName,
        age: age,
        dateCreatedAt: new Date(),
        dateUpdatedAt: new Date()
    });

    person.save(function(err) {
        if (err) throw err;
        console.log('Person saved successfully!');
        res.send({"result" : "successful"});
    });
}