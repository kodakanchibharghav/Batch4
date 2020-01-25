function fun1()
{
	var a=document.registration.userid.value;
	var b=document.registration.username.value;
	var c=document.registration.password.value;
	var d=document.registration.email.value;
	var e=document.registration.address.value;
	
	
	
	var f = document.getElementsByName('gender');
	var f;
	for(var i = 0; i < f.length; i++){
	    if(f[i].checked){
	       f =f
	       [i].value;
	    }
	}
	
	//var f=document.getElementByName("gender").value;
	
	
	
	var g=document.registration.country.value;
	var h=document.registration.zipcode.value;
	var i=document.registration.language.value;
	var j=document.registration.about.value;
alert("hi hello how are you"+a+""+b+""+c+""+d+""+e+""+f+""+g+""+h+""+i+""+j);	

if(fun2(a,5,12))
	
if(fun3(c,8,12))
	{
	if(allLetter(b))
		{
		
		}
	if(address(e))
	{}
	if(zipcode(h))
	{}
	
	}
//return false;
}

function fun2(a,min,max)
{
 var a_len=a.length;
 if(a_len==0 || a_len>=max || a_len<min)
	 {
	 alert("user id should not be empty/length be between "+min+"to"+max);
	 a.focus();
	 return false;
	 }
 
 return true;
}
function fun3(c,min,max)
{
 var c_len=c.length;
 if(c_len==0 || c_len>=max || c_len<min)
	 {
	 alert("password" +
	 		" should not be empty/length be between "+min+"to"+max);
	 c.focus();
	 return false;
	 }
 return true;

}

function allLetter(b)
{
var letters=/^[A-Za-z]+$/;
if(b.match(letters))
	{
	return true;
	}
else
	{
	alert("Username must have alphabet characters only");
	b.focus();
	return false;
	}
}


function address(e)
{
var letters=/^[A-Za-z]+$/;
if(e.match(letters))
	{
	return true;
	}
else
	{
	alert("address must have alphabet characters only");
	e.focus();
	return false;
	}
}


function zipcode(h)
{
var letters=/^[0-9]+$/;
if(h.match(letters))
	{
	return true;
	}
else
	{
	alert("zipcode must have numeric characters only");
	h.focus();
	return false;
	}
}


function country(g)
{

if(i=="Default")
	{
	alert("select your country from the list")
	g.focus();
	return false;
	}
else
	{
	return true;
	
	}
}

function validateEmail(d)
{
var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(d.match(mailformat))
{
return true;
}
else
{
alert("you have entered an invalid email address!");
d.focus();
return false;
}
}

function gen(f)
{
var x=0,gender;
if(f[0].checked==true)
{
x++;
alert(gender="male");
}
if(f[1].checked==true)
{
x++;
alert(gender="female");
}
if(f[2].checked==true)
{
x++;
alert(gender="other");
}
if(x==0)
{
alert("select male or female");
f.focus();
return false;
}
else
{
alert("form successfully submitted");
window.location.reload();
return true();
}
}