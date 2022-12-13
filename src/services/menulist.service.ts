import { Injectable } from '@nestjs/common';
import { menulistRepo } from '../repository/menulist.repo';
import { menulist } from '../schemas/menulist.schema';

@Injectable()
export class menulistService {
    constructor(
        private readonly menulistRepo: menulistRepo
    ) { }

    async findAll(): Promise<menulist[]> {
        return this.menulistRepo.findAll();
    }

    async create(data): Promise<menulist> {
        data.createddate = new Date();
        return this.menulistRepo.create(data);
    }

    async update(menulistId, data): Promise<menulist> {
        return this.menulistRepo.update(menulistId, data);
    }

    async delete(menulistId): Promise<menulist> {
        return this.menulistRepo.delete(menulistId);
    }
}