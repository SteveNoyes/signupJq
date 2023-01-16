$(document).ready(main);

function main()
{
	$("#submit").click(validateForm);
}

function validateForm()
{
	$("#error-message").html("");
	var errorMessage = "";
	
	//check empty fields
	errorMessage += isEmpty($("#name"), "<li>Please provide a name</li>");
	errorMessage += isEmpty($("#email"), "<li>Please provide an email</li>");
	errorMessage += isEmpty($("#phone"), "<li>Please provide a phone number</li>");
	errorMessage += isEmpty($("#password"), "<li>Please provide a password</li>");
	errorMessage += isEmpty($("#password-conf"), "<li>Please confirm password</li>");
	
	//validate email
	if(!validateEmail($("#email")))
	{
		errorMessage += "<li>Invalid email</li>";
	}
	
	//validate phone
	if(!$.isNumeric($("#phone").val()))
	{
		errorMessage += "<li>Invalid phone number</li>";
	}
	
	//compare password fields
	if($("#password").val() !== $("#password-conf").val())
	{
		errorMessage += "<li>Passwords do not match</li>";
	}
	
	//handle results
	if(errorMessage !== "")
	{
		event.preventDefault();
		$("#error-message").html(errorMessage);
	}
	else
	{
		$("#form").submit();
	}
}

function validateEmail(email)
{
	var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return regex.test(email.val());
}

function isEmpty(field, message)
{
	if(field.val() === "")
	{
		return message;
	}
	return "";
}