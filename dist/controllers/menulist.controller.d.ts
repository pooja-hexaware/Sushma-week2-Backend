import { menulistDto } from '../dto/menulist-dto.dto';
import { menulistService } from '../services/menulist.service';
export declare class menulistController {
    private readonly menulistService;
    constructor(menulistService: menulistService);
    create(menulistDto: menulistDto): Promise<import("../schemas/menulist.schema").menulist>;
    findAll(): Promise<import("../schemas/menulist.schema").menulist[]>;
    update(id: string, menulistDto: menulistDto): Promise<import("../schemas/menulist.schema").menulist>;
    delete(id: string): Promise<import("../schemas/menulist.schema").menulist>;
}
