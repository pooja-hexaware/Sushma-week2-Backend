import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { menulist, menulistDocument } from 'src/schemas/menulist.schema';

@Injectable()
export class menulistRepo {
    constructor(
        @InjectModel(menulist.name)
        private readonly menulistModel: Model<menulistDocument>) {}

    async create(data): Promise<menulist> {
        return new this.menulistModel(data).save();
    }

    async findAll(): Promise<menulist[]> {
        return this.menulistModel.find({})
            .exec();
    }

    async update(menulistId, data): Promise<menulist> {
        const filter = { _id: menulistId };
        return this.menulistModel.findOneAndUpdate(filter, data);
    }

    async delete(menulistId): Promise<menulist> {
        const filter = { _id: menulistId };
        return this.menulistModel.findByIdAndDelete(menulistId);
    }
}