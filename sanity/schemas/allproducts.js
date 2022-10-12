export default {
    name: 'allproducts',
    title: 'AllProducts',
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    {
        name: 'category',
        title: 'Category',
        type: 'string',
    },
    {
        name: 'subcategory',
        title: 'SubCategory',
        type: 'string',
    },
    {
        name: 'keywords',
        title: 'Keywords',
        type: 'string',
    },
    {
        name: 'originalprice',
        title: 'OriginalPrice',
        type: 'number',
    },
    {
        name: 'finalprice',
        title: 'FinalPrice',
        type: 'number',
    },
    {
        name: 'stock',
        title: 'Stock',
        type: 'number',
    },
    {
        name: 'key',
        title: 'Key',
        type: 'slug',
    },
    {
        name: 'imagelist',
        title: 'ImageList',
        type: 'array',
        of: [{ type: 'image' }],
        max: '5'
    },
    {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{
            title: 'Product Deails',
            type: 'object',
            fields: [
                {
                    title: 'Title',
                    name: 'title',
                    type: 'string'
                },
                {
                    title: 'Value',
                    name: 'value',
                    type: 'string'
                }

            ]
        }],

    },
    ],
};