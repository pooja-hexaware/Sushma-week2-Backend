import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menulistDocument = menulist & Document;

@Schema()
export class menulist {
   
   @Prop()
   itemname: string;   
   
   @Prop()
   itemdescription: string; 
                
   @Prop()
   amount: number;   
                   
   @Prop()
   toppings: string[]; 
   
}

export const menulistSchema = SchemaFactory.createForClass(menulist);