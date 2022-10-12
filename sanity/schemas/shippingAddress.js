export default {
    name: 'shippingAddress',
    title: 'ShippingAddress',
    type: 'object',
    fields: [
        {
            name: 'fullName',
            title: 'FullName',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'postalcode',
            title: 'PostalCode',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',   
        }
    ],
};