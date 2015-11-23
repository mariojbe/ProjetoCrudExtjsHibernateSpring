package br.org.abmnet.services;

import br.org.abmnet.model.Usuario;
import br.org.abmnet.repository.UsuarioRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Mário Jorge
 * 
 */
@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario create(Usuario user) {
       return usuarioRepository.save(user);
    }

    @Override
    public Usuario get(int id) {
        return usuarioRepository.findOne(id);
    }

    @Override
    public Usuario update(Usuario usuario) {
        Usuario usuarioToUpdate = get(usuario.getId());
        if(usuarioToUpdate != null){
            usuarioToUpdate.setUsuario(usuario.getUsuario());
            usuarioToUpdate.setSenha(usuario.getSenha());
             return usuarioRepository.save(usuario);
        }
       return null;
    }

    @Override
    public Usuario delete(int id) {
        Usuario usuarioToDelete = get(id);
        if(usuarioToDelete != null){
          usuarioRepository.delete(id);  
          return usuarioToDelete;
        }
        return null;
    }

    @Override
    public List<Usuario> getAll() {
        return usuarioRepository.findAll();
    }
}
