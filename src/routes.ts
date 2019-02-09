import {Request, Response} from "express";
import {PartnerRoutes} from "./mysql/partner/partner-routes";

export class Routes {
    public routes(app): void {
        // AuthenticationRoutes.routes(app);
        PartnerRoutes.routes(app);
}
