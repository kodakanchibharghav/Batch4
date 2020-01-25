<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
String first,last, user,pass,contact,address;
first=request.getParameter("first name");
last=request.getParameter("last name");
user=request.getParameter("user name");
pass=request.getParameter("password");
address=request.getParameter("address");
contact=request.getParameter(" contact");
//out.println("FirstName"+first+"LastName"+last);
//out.println("UserName"+user+"Password"+pass);
//out.println("Address"+address+"Contact"+contact);
if(user.equals("meghana")&&pass.equals("1234"))
{	//out.println("first name"+first+"last name"+last+"user name"+user+"address"+address+"contact"+contact);
//response.sendRedirect("jsp2.jsp?User='"+user+"'");
//request.getRequestDispatcher("jsp2.jsp").forward(request,response);
//session.setAttribute("user",user);
//pageContext.setAttribute("user",user,pageContext.PAGE_SCOPE);
//pageContext.setAttribute("user",user,pageContext.SESSION_SCOPE);
//pageContext.setAttribute("user",user,pageContext.APPLICATION_SCOPE);

out.println(config.getInitParameter("name"));
//pageContext.setAttribute("user ",user,pageContext.REQUEST_SCOPE);
//request.getRequestDispatcher("jsp2.jsp").forward(request,response);
//out.println("<a href='jsp2.jsp'>Click</a>");
}
else
{
	response.sendRedirect("Home.html");
}
%>
</body>
</html>