import {Role} from "./role";

/**
 * Created by martinbraun on 29.12.16.
 */
export class Partner {
    uuid: String;
    dateCreated: Date;
    dateUpdatedAt: Date;
    description: String;
    listRole: Role[] = [];
}
