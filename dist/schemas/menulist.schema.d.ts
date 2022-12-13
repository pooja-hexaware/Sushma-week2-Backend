import { Document } from 'mongoose';
export declare type menulistDocument = menulist & Document;
export declare class menulist {
    itemname: string;
    itemdescription: string;
    amount: string;
    toppings: string[];
}
export declare const menulistSchema: import("mongoose").Schema<Document<menulist, any, any>, import("mongoose").Model<Document<menulist, any, any>, any, any>, undefined, {}>;
