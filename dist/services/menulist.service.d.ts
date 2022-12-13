import { menulistRepo } from '../repository/menulist.repo';
import { menulist } from '../schemas/menulist.schema';
export declare class menulistService {
    private readonly menulistRepo;
    constructor(menulistRepo: menulistRepo);
    findAll(): Promise<menulist[]>;
    create(data: any): Promise<menulist>;
    update(menulistId: any, data: any): Promise<menulist>;
    delete(menulistId: any): Promise<menulist>;
}
