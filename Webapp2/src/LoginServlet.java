

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class LoginServlet extends HttpServlet {
		
		String user,pass;
	
public void init()
{
	System.out.println("Init method");
}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	PrintWriter out=response.getWriter();
	user=request.getParameter("user");
	pass=request.getParameter("password");
	request.setAttribute("user",user);
	if(user.equals("ashwitha")&&pass.equals("ash"))
	//if(u1=="ashwitha"&&p1=="ash")
	{
	response.sendRedirect("Servlet2?User="+user);
	}
	else
	{
		response.sendRedirect("New.html");
	out.println("invalid user");
	}
	}
public void destroy()
{
	System.out.println("Inside destroy method");
}
}
