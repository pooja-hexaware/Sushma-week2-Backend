import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { menulistDto } from '../dto/menulist-dto.dto';
import { menulistService } from '../services/menulist.service';


@Controller('menulist')
export class menulistController {
    constructor(private readonly menulistService: menulistService) { }

    @Post()
    async create(@Body() menulistDto: menulistDto) {
        const res = this.menulistService.create(menulistDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.menulistService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() menulistDto: menulistDto) {
        return this.menulistService.update(id, menulistDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menulistService.delete(id);
    }
}