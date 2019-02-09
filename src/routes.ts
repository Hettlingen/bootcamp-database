import {Request, Response} from "express";

export class Routes {
    public routes(app): void {

        app.get('/', function(req, res) {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        });


        // app.route('/')
        //     .get((req: Request, res: Response) => {
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     })
    }
}
