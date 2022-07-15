import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    description: String,
    allergens: String,
    price: String,
    image: String

});

@ObjectType()
export class Product extends Document {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    age: number;
}