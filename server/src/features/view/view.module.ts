import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../product/product.model';
import { View, ViewSchema } from './view.model';
import { ViewResolver } from './view.resolver';
import { ViewService } from './view.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: View.name, schema: ViewSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [ViewService, ViewResolver],
})
export class ViewModule {}
