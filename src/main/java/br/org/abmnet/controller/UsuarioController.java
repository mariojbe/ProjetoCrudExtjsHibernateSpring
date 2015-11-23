package br.org.abmnet.controller;

import br.org.abmnet.model.Usuario;
import br.org.abmnet.services.UsuarioService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author user
 */
@Controller
@RequestMapping(value = "pages/usuarios")
public class UsuarioController {
    
    @Autowired
	private UsuarioService usuarioService;

	@RequestMapping(value = "create/", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Usuario createUsuario(@RequestBody Usuario user) {
		return usuarioService.create(user);
	}

	@RequestMapping(value = "edit/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Usuario editUsuario(@PathVariable int id,
			@RequestBody Usuario usuario) {
		usuario.setId(id);
		return usuarioService.update(usuario);
	}

	@RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Usuario deleteUsuario(@PathVariable int id) {
		return usuarioService.delete(id);
	}

	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Usuario> allUsuarios() {
		return usuarioService.getAll();
	}
    
}
