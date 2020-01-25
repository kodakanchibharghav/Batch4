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
//out.println("welcome"+pageContext.getAttribute("user",pageContext.SESSION_SCOPE)+"for this site");
//out.println("welcome "+pageContext.getAttribute("user",pageContext.PAGE_SCOPE)+"for this site");
//out.println("welcome"+pageContext.getAttribute("user",pageContext.APPLICATION_SCOPE)+"for this site");
out.println("welcome "+pageContext.getAttribute("user ",pageContext.REQUEST_SCOPE)+"for this site");
%>
</body>
</html>