import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class View {
  @Field(() => ID)
  id: string;

  @Prop()
  @Field()
  productId: string;

  @Prop()
  @Field()
  guestIP: string;

  @Prop()
  @Field()
  device: string;

  @Prop({ default: null })
  @Field({ nullable: true })
  userId: string | null;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const ViewSchema = SchemaFactory.createForClass(View);
export type ViewDocument = View & Document;
