import {PartnerServiceMysql} from "./database/partner-service-mysql";
import {Person} from "../model/person";

export class PartnerService {

    static getPerson(uuidPerson: string) {
        return PartnerServiceMysql.readPerson(uuidPerson)
            .then(function(person) {
                return person;
            }).catch(function(error){
                throw new Error('Fehler beim Lesen des Partners: ' + error);
        });
    }

    static getListPerson(): Promise<Person[]> {
        return PartnerServiceMysql.readListPerson()
            .then(function(listPerson) {
                return listPerson;
            }).catch(function(error){
                throw new Error('Service - Fehler beim Lesen der Personen: ' + error);
        });
    }
}
