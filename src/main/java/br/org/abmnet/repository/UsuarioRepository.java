package br.org.abmnet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.abmnet.model.Usuario;


/**
 *
 * @author Mario Jorge
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    
}
