Ext.define('ExtMVC.controller.Usuarios', {
    extend: 'Ext.app.Controller',
    stores: ['Usuarios'],
    models: ['Usuario'],
    views: ['usuario.Formulario', 'usuario.Grid'],
    refs: [{
            ref: 'usuarioPanel',
            selector: 'panel'
        }, {
            ref: 'usuarioGrid',
            selector: 'grid'
        }
    ],
    init: function () {
        this.control({
            'usuariogrid dataview': {
                itemdblclick: this.editarUsuario
            },
            'usuariogrid button[action=add]': {
                click: this.editarUsuario
            },
            'usuariogrid button[action=delete]': {
                click: this.deleteUsuario
            },
            'usuariogrid button[action=save]': {
                click: this.updateUsuario
            }
        });
    },
    editarUsuario: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.usuario.Formulario').show();

        if (record) {
            edit.down('form').loadRecord(record);
        }
    },
    updateUsuario: function (button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        var novo = false;

        if (values.id > 0) {
            record.set(values);
        } else {
            record = Ext.create('ExtMVC.model.Usuario');
            record.set(values);
            this.getUsuariosStore().add(record);
            novo = true;
        }

        win.close();
        this.getUsuariosStore().sync();

        if (novo) { //faz reload para atualziar
            this.getUsuariosStore().load();
        }
    },
    deleteUsuario: function (button) {
        var grid = this.getUsuarioGrid(),
                record = grid.getSelectionModel().getSelection(),
                store = this.getUsuariosStore();

        if (record.length === 0) {
            //Ext.Msg.alert('Erro', 'Nenhuma linha selecionada');
            Ext.Msg.show({
                title: 'Atenção',
                msg: 'Selecione ao menos um registro!',
                icon: Ext.MessageBox.ERROR,
                scope: this,
                width: 100
            });
        } else {
            Ext.Msg.show({
                title: 'ConfirmaÃ§Ã£o',
                msg: 'Tem certeza que deseja apagar o(s) registro(s) selecionado(s)?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function (btn, ev) {
                    var grid = this.getUsuarioGrid(),
                    record = grid.getSelectionModel().getSelection(),
                    store = this.getUsuariosStore();
            
                    if (btn == 'yes') {
                        store.remove(record);
                        this.getUsuariosStore().sync();
                        this.getUsuariosStore().load();
                    }
                }
            });
        }
    }

});
