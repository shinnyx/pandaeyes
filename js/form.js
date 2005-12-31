function validateForm()
{
	$(".error").hide();
	var hasError = false;
	var emailReg = "[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}";

	var emailToVal = $("#email").val();
	if(emailToVal == '')
	{
		$("#email").before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}
	else if(!emailReg.test(emailToVal))
	{
		$("#email").before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var name = $("#name").val();
	if(name == "")
	{
		$("#name").before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var message = $("#message").val();
	if(message == "")
	{
		$("#message").before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	if(hasError == false)
	{
		$.post("php/sendemail.php",{emailTo:emailToVal,name:name,message:message});
		return false;
	}
}