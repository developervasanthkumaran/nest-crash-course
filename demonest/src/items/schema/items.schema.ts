import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {ItemDto} from '../dto/items.dto'

export type ItemDocument = Item & Document & ItemDto;


@Schema()
export class Item{
    @Prop()
    i_id:number
    @Prop()
    name:string
    @Prop()
    description:string
}

export const ItemSchema  = SchemaFactory.createForClass(Item);