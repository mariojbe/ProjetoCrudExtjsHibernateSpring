Ext.define('ExtMVC.store.Produtos', {
    extend: 'Ext.data.Store',
    //autoLoad: true,
    //autoSync: true,
    autoSave: false,
    model: 'ExtMVC.model.Produto',
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
            create: 'pages/products/create/',
            read: '',
            update: 'pages/products/edit/',
            destroy: 'products/delete/'
        }
    }
});