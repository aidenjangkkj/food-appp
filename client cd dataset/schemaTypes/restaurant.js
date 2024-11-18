import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurants Name',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: 'Restaurants Description',
            validation: rule => rule.max(200)
        },
        {
            name: 'image',
            type: 'image',
            title: 'image of the Restaurant'
        },
        {
            name: 'lat',
            type: 'number',
            title: 'latitude of the Restaurant'
        },
        {
            name: 'lng',
            type: 'number',
            title: 'longitude of the Restaurant'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Restaurant address'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter 1 to 5',
            validation: rule=> rule.required().min(1).max(5).error('1 to 5')
        },
        {
            name: 'reviews',
            type: 'string',
            title: 'Reviews'
        },
        {
            name: 'type',
            title: 'Category',
            validation: rule => rule.required(),
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{type:'reference', to: [{type: 'dish'}]}]
        }

    ]
})