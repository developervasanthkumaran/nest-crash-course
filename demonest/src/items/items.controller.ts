import { Controller,Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { ItemDto } from './dto/items.dto';
import { ItemsService } from './items.service';
import { Item } from './schema/items.schema';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Promise<Item[]> {
    const promise1 =  this.itemsService.findAll().then(r=>{console.log(r);return r;});
    return  promise1;
    }
   
    @Get(':i_id')
    findOne(@Param('i_id') id : number): Promise<Item> {
        console.log("calling findOne with", typeof(id));
     const p1 =  this.itemsService.findOne(id);
     console.log(p1);
     return p1;
    }
   
    @Post()
    create(@Body() itemDto: ItemDto): Promise<Item> {
     return this.itemsService.create(itemDto);
    }
    
    @Delete(':i_id')
    delete(@Param('i_id') id : number): Promise<Item> {
        
     return this.itemsService.delete(id);
    }
   
    @Put(':i_id')
    update(@Body() updateItemDto: Item, @Param('i_id') i_id:number): Promise<Item> {
     return this.itemsService.update(i_id, updateItemDto);
    }
}
