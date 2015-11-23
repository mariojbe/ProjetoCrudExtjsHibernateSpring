Ext.define('ExtMVC.model.Usuario', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'int',
            useNull: true
        }, 'usuario', 'senha'],
    validations: [{
            type: 'length',
            field: 'usuario',
            min: 3
        }, {
            type: 'length',
            field: 'senha',
            min: 3
        }]
});