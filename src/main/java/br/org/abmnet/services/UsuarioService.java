/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.org.abmnet.services;

import br.org.abmnet.model.Usuario;
import java.util.List;

/**
 *
 * @author user
 */
public interface UsuarioService {
    
    public Usuario create(Usuario user);

    public Usuario get(int id);

    public Usuario update(Usuario usuario);

    public Usuario delete(int id);

    public List<Usuario> getAll();
    
}
