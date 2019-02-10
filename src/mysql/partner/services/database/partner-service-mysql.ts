import {Person} from "../../model/person";
import {configDatabase} from './database-connection-config';

export class PartnerServiceMysql {

    static readPerson(uuidPerson: string): Promise<Person> {
        return new Promise(function (resolve, reject) {
            const mysqlx = require('@mysql/xdevapi');
            let tablePost: any;

            mysqlx
                .getSession(configDatabase)
                .then(function (session: any) {
                    tablePost = session.getSchema('PartnerSchema').getTable('Person');
                })
                .then(function () {
                    return tablePost.select()
                        .where('uuidPartner = :uuidPerson')
                        .bind('uuidPerson', uuidPerson)
                        .execute(function (person: Person) {
                            console.log(person);
                            resolve(person);
                        });
                })
                .catch(function (error: any) {
                    reject(new Error('Error reading person: ' + error));
                });
        });
    };

    static readListPerson(): Promise<Person[]> {
        return new Promise(function (resolve, reject) {
            const mysqlx = require('@mysql/xdevapi');
            let session: any;

            mysqlx
                .getSession(configDatabase)
                .then(function (sessionNew: any) {
                    session = sessionNew;
                })
                .then(function () {
                    return Promise.all([
                        session.sql('USE PartnerSchema').execute(),
                        session.sql('SELECT json_object(\'firstName\', firstName, \'lastName\', lastName) FROM Person').execute(function (listPerson: Person[]) {
                            resolve(listPerson);
                        })
                    ])
                })
                .catch(function (error: any) {
                    reject(new Error('Fehler beim Lesen der Personen: ' + error));
                });
        });
    }
}
