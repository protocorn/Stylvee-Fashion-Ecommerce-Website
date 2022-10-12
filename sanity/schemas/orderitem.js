export default {
    name: 'orderitem',
    title: 'OrderItem',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'finalprice',
            title: 'FinalPrice',
            type: 'number',
        },
        {
            name: 'originalprice',
            title: 'OriginalPrice',
            type: 'number',
        },
        {
            name: 'p_key',
            title: 'p_key',
            type: 'string',
        },
    ],
};