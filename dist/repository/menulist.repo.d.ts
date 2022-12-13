import { Model } from 'mongoose';
import { menulist, menulistDocument } from 'src/schemas/menulist.schema';
export declare class menulistRepo {
    private readonly menulistModel;
    constructor(menulistModel: Model<menulistDocument>);
    create(data: any): Promise<menulist>;
    findAll(): Promise<menulist[]>;
    update(menulistId: any, data: any): Promise<menulist>;
    delete(menulistId: any): Promise<menulist>;
}
