import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import products from './products.json'

export interface SetEntity {
    id: String;
    name: String;
    description: String;
    allergens: String;
    price: String;
    image: String;
}

@Resolver('Set')
export class SetResolver {
    private sets: SetEntity[] = products;

    @Query('allSets')
    getAllSets(): SetEntity[] {
        return this.sets;
    }

    @Mutation()
    addSet(
        @Args('name') name: string,
        @Args('description') description: string,
        @Args('allergens') allergens: string,
        @Args('price') price: string,
        @Args('image') image: string
    ) {
        const newSet = {
            id: randomUUID(),
            name,
            description,
            allergens,
            price,
            image
        };

        this.sets.push(newSet);

        return newSet;
    }

    @Mutation()
    changePrice(
        @Args('id') id: String,
        @Args('price') price: string
    ) {
        const index = this.sets.findIndex(item => item.id === id)
        this.sets[index].price = price
        return this.sets[index]
    }
}