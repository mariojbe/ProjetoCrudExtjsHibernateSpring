Ext.define('ExtMVC.view.usuario.Formulario', {
    extend: 'Ext.window.Window',
    alias: 'widget.usuarioform',
    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],
    title: 'Editar/Criar Usuário',
    layout: 'fit',
    autoShow: true,
    width: 280,
    iconCls: 'icon-user',
    initComponent: function () {

        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        this.items = [
            {
                xtype: 'form',
                monitorValid: true,
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'id',
                        fieldLabel: 'id',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'usuario',
                        afterLabelTextTpl: required,
                        id: 'usuario',
                        fieldLabel: 'Usuário',
                        listeners: {
                            afterrender: function (fld) {
                                fld.focus(false, 500);
                            }
                        }
                    },
                    {
                        xtype: 'textfield',
                        name: 'Senha',
                        fieldLabel: 'Senha'
                    }
                ]
            }
        ];

        this.dockedItems = [{
                xtype: 'toolbar',
                dock: 'bottom',
                id: 'buttons',
                formBind: true,
                ui: 'footer',
                items: ['->', {
                        iconCls: 'icon-save',
                        text: 'Salvar',
                        //disabled: true,
                        action: 'save'
                    }, {
                        iconCls: 'icon-reset',
                        text: 'Limpar',
                        scope: this,
                        handler: function (btn) {
                            btn.up('window').down('form').getForm().reset();
                            Ext.getCmp('usuario').focus(true, 10);
                        }
                        //handler: this.close
                    }]
            }];

        this.callParent(arguments);
    }
});
