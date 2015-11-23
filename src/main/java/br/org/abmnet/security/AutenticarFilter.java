package br.org.abmnet.security;

import java.io.IOException;
import java.io.Writer;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 *
 * @author Mário Jorge
 */
public class AutenticarFilter extends UsernamePasswordAuthenticationFilter {

    private String determineTargetUrl(HttpServletRequest request) {
        // Obtendo a Autoridade do usuário conectado
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String role = auth.getAuthorities().toString();

        String targetUrl = "";

        String path = request.getContextPath();

        if (role.contains("ROLE_USER")) {
            targetUrl = path + "/pages/crud.jsp";
        } else if (role.contains("ROLE_ADMIN")) {
            targetUrl = path + "/pages/admin.jsp";
        }
        return targetUrl;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, Authentication authResult) throws IOException, ServletException {
        SavedRequestAwareAuthenticationSuccessHandler srh = new SavedRequestAwareAuthenticationSuccessHandler();
        this.setAuthenticationSuccessHandler(srh);
        srh.setRedirectStrategy(new RedirectStrategy() {
            @Override
            public void sendRedirect(HttpServletRequest request,
                    HttpServletResponse response, String s) throws IOException {
            }
        });
        //super.successfulAuthentication(request, response, null, authResult);
        super.successfulAuthentication(request, response, authResult);
        HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
        Writer out = responseWrapper.getWriter();
        String url = determineTargetUrl(request);
        out.write("{success:true, location:\'" + url + "\'}");
        //out.write("{success:true}");
        out.close();

    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        super.unsuccessfulAuthentication(request, response, failed);
        HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);
        Writer out = responseWrapper.getWriter();
        out.write("{success:false}");
        out.close();
    }

}
