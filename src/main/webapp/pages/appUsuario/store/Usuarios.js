Ext.define('ExtMVC.store.Usuarios', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    autoSave: false,
    model: 'ExtMVC.model.Usuario',
    proxy: {
        type: 'rest',
        url: 'usuarios',
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
            create: 'usuarios/create/',
            read: '',
            update: 'usuarios/edit/',
            destroy: 'usuarios/delete/'
        }
    }
});