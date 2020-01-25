

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;


public class Servlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		ServletContext sc=getServletContext();
		out.println("Hello"+request.getParameter("User")+"you are in tha page"+getServletConfig().getServletName());
		//out.println(((GenericServlet)request).getInitParameter("Mobile"));
	}

}
