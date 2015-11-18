Ext.define('ExtMVC.model.Produto', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'int',
            useNull: true
        }, 'name', 'price'],
    validations: [{
            type: 'length',
            field: 'name',
            min: 1
        }, {
            type: 'length',
            field: 'price',
            min: 1
        }]
});