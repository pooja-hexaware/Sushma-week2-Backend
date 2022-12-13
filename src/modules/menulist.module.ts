import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menulistController } from '../controllers/menulist.controller';
import { menulistService } from '../services/menulist.service';
import { menulistRepo } from '../repository/menulist.repo';
import { menulist, menulistSchema } from '../schemas/menulist.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: menulist.name, schema: menulistSchema }])
    ],
    controllers: [menulistController],
    providers: [menulistService, menulistRepo],
    exports: [menulistService, menulistRepo]
  })
  export class menulistModule { }