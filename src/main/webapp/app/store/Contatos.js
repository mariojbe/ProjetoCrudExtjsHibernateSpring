Ext.define('ExtMVC.store.Contatos', {
    autoLoad: true,
    autoSync: true,
    model: 'Product',
    proxy: {
        type: 'rest',
        url: 'products',
        format: 'json',
        headers: {
            'Content-Type': 'application/json'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        },
        api: {
            create: 'products/create/',
            read: '',
            update: 'products/edit/',
            destroy: 'products/delete/'
        }
    }
});