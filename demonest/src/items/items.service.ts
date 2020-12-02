import { Injectable, Options } from '@nestjs/common'
// import {Item} from './interfaces/item.interface'
import {Model} from 'mongoose'
import {InjectModel, MongooseModule} from '@nestjs/mongoose'
import {ItemDto} from './dto/items.dto'
import {Item, ItemDocument} from './schema/items.schema'


@Injectable()
export class ItemsService {

    //used for type checking
    constructor(@InjectModel(Item.name) private readonly itemModel:Model<ItemDocument>){}
    
    async findAll():Promise<Item[]>{
        return await this.itemModel.find();
    }

    async findOne(id:number):Promise<Item>{
        return await this.itemModel.findOne({i_id:id});
    }

    async create(item:ItemDto):Promise<Item>{
        const newItem = new  this.itemModel(item);
        return await newItem.save();
    }

    async delete(id:number):Promise<Item>{
        return await this.itemModel.findOneAndDelete({i_id:id});
    }

    async update(id:number, item:Item):Promise<Item>{
        
        console.log(id, "updating item ", item);
        const option = {$new:true}
        const k =  await this.itemModel.findOneAndUpdate(
                {i_id : id},
                item,
                {useFindAndModify:false}
        );
        console.log(k);
        return k;
    }
}
