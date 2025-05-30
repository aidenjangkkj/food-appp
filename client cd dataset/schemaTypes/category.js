import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Category Name',
            validation: rule => rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: 'Category Description',
            validation: rule => rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'image of the category'
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{type: 'reference', to: [{type: 'restaurant'}]}]
        }
    ]
})