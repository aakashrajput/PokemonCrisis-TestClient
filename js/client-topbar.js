function userbar() {
	var buf='';
	//var sum = a+b;
	buf = '<button name="login">Choose name</button>';
	return buf;
}
var result = userbar();
document.write(result);

function login(){
	app.addPopup(LoginPopup);
}

