$(document).ready(function() {
	$.each([$('#name'), $('#email'), $('#message')], function() {
		$(this).focus(function() {
			$(this).siblings(".error").remove();
		});
	});
});

function validateForm()
{
	var hasError = false;
	$('.error').hide();
	var emailReg = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

	var emailToVal = $("#email").val();
	if(emailToVal == '')
	{
		$("#email").after('<img src="img/error.png" class="error"/>');
		hasError = true;
	}
	else if(!emailReg.test(emailToVal))
	{
		$("#email").after('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var name = $("#name").val();
	if(name == "")
	{
		$("#name").after('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	var message = $("#message").val();
	if(message == "")
	{
		$("#message").after('<img src="img/error.png" class="error"/>');
		hasError = true;
	}

	if(hasError == false)
	{
		var submit = $.post("./mail.php",{email:emailToVal,name:name,message:message});
		submit.done(function() {
			$('#submit_text').html("THANKS!");
		});
		return false;
	}
}