import {Application, Request, Response} from "express";
import {PartnerServiceRest} from "./services/rest/partner-service-rest";

export class PartnerRoutes {
    public static routes(app: Application): void {
        app.get('/api/v1/partner/:uuidPerson', function(request: Request, response: Response) {
            PartnerServiceRest.getPerson(request, response);
        });

        app.get('/api/v1/partner', function(request: Request, response: Response) {
            PartnerServiceRest.getListPerson(request, response);
        });
    }
}
