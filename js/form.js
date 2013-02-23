$(document).ready(function() {
	var hasError = false;
	$.each([$('#name'), $('#email'), $('#message')], function() {
		$(this).focus(function() {
			$(this).siblings(".error").remove();
		});
	});
})

function validateForm()
{
	$('.error').hide();
	var emailReg = "[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}";

	var emailToVal = $("#email").val();
	if(emailToVal == '')
	{
		$("#email").siblings('label').before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}
	else if(!emailReg.test(emailToVal))
	{
		$("#email").siblings('label').before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var name = $("#name").val();
	if(name == "")
	{
		$("#name").siblings('label').before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var message = $("#message").val();
	if(message == "")
	{
		$("#message").siblings('label').before('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	if(hasError == false)
	{
		$.post("php/sendemail.php",{emailTo:emailToVal,name:name,message:message});
		return false;
	}
}