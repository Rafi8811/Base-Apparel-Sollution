
function validation()
{
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var errormsg = document.getElementById("error-msg");
	var erroricon = document.getElementById("error-icon");
	var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (email.match(pattern))
	{
      form.classList.add("valid");
      form.classList.remove("invalid");
      errormsg.innerHTML = "Please provide a valid email";
      errormsg.style.opacity = "0";
      erroricon.style.opacity = "0";
	}
	else
	{
      form.classList.remove("valid");
      form.classList.add("invalid");
      errormsg.innerHTML = "Please provide a valid email";
      errormsg.style.opacity = "1";
      erroricon.style.opacity = "1";
      
	}
   

}
