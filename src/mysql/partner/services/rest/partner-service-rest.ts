import {Request, Response} from "express";
import {PartnerService} from "../partner-service";

export class PartnerServiceRest {

    static getPerson(request: Request, response: Response) {
        PartnerService.getPerson(request.params.uuidPerson)
            .then(function(person) {
                response.status(200).send(person);
            }).catch(function(error){
                response.status(404).send("The partner wasn't found: " + error)
        });
    };

    static getListPerson(request: Request, response: Response) {
        PartnerService.getListPerson()
            .then(function(listPerson) {
                response.status(200).send(listPerson);
            }).catch(function(error){
                response.status(404).send("Rest Service - Partner were not found: " + error)
        });
    }
}
