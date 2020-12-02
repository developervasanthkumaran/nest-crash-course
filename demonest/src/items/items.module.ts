import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
// import {ItemSchema} from './schema/items.schema'
import {Item, ItemSchema} from './schema/items.schema'


@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
