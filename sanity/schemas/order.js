export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to:[{type:'user'}],
            options:{
                disableNew:true,
            },
        },
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'itemPrice',
            title: 'ItemPrice',
            type: 'number',
        },
        {
            name: 'shippingFee',
            title: 'ShippingFee',
            type: 'number',
        },
        {
            name: 'taxPrice',
            title: 'TaxPrice',
            type: 'number',
        },
        {
            name: 'totalPrice',
            title: 'TotalPrice',
            type: 'number',
        },
        {
            name: 'paymentMethod',
            title: 'PaymentMethod',
            type: 'string',
        },
        {
            name: 'shippingAddress',
            title: 'ShippingAddress',
            type: 'shippingAddress',
        },
        {
            name: 'paymentResult',
            title: 'PaymentResult',
            type: 'paymentResult',
        },
        {
            name: 'orderItems',
            title: 'OrderItems',
            type: 'array',
            of:[
                {
                    title:'Order Item',
                    type:'orderitem'
                }
            ]
        },
        {
            name: 'isPaid',
            title: 'IsPaid',
            type: 'boolean',
        },
        {
            name: 'isDelivered',
            title: 'IsDelivered',
            type: 'boolean',
        },
        {
            name: 'paidDate',
            title: 'PaidDate',
            type: 'datetime',
        },
        {
            name: 'createdAt',
            title: 'CreateddAt',
            type: 'datetime',
        },
    ],
};