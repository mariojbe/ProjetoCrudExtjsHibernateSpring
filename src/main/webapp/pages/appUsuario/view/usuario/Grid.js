Ext.define('ExtMVC.view.usuario.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usuariogrid',
    requires: ['Ext.toolbar.Paging'],
    iconCls: 'icon-grid',
    title: 'Usuários',
    store: 'Usuarios',
    columns: [{
            header: 'ID',
            width: 40,
            flex: 1,
            dataIndex: 'id'
        },
        {
            header: "USUARIO",
            width: 170,
            flex: 1,
            dataIndex: 'usuario'
        }, {
            header: "senha",
            width: 160,
            flex: 1,
            dataIndex: 'senha'
        }],
    initComponent: function () {

        this.dockedItems = [{
                xtype: 'toolbar',
                items: [{
                        iconCls: 'icon-save',
                        itemId: 'add',
                        text: 'Adicionar',
                        action: 'add'
                    }, {
                        iconCls: 'icon-delete',
                        text: 'Excluir',
                        action: 'delete'
                    }]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'Usuarios',
                displayInfo: true,
                displayMsg: 'Mostrando Usuarios {0} - {1} de {2}',
                emptyMsg: "Nenhum usuário encontrado."
            }];

        this.callParent(arguments);
    },
    listeners: {
        afterlayout: function (grid) {
            if ((this.store.getCount() == 0)) {
                setTimeout(function () {
                    grid.el.unmask();
                }, 100);
                grid.el.mask('Carregando...');
                this.store.load({
                    callback: function () {
                        grid.el.unmask();
                    }
                });
            }
        }
    }

});
