$(document).ready(function() {
	$("#signin").on("click", login);
	$("#logoutbtn").on("click", logout);

	var currentUser = sessionStorage.getItem('user');
	if (!currentUser) {
		console.log("not logged in");
		$("#loginbtn").show();
		$("#regbtn").show();
		$("#profilebtn").hide();
		$("#logoutbtn").hide();
	} else {
		console.log("logged in as " + currentUser);
		$("#loginbtn").hide();
		$("#regbtn").hide();
		$("#profilebtn").show();
		$("#logoutbtn").show();
	}
});

function login() {
	var userEmail = $("#useremail").val();
	if (userEmail != 'ivan.ivanov@gmail.com' && userEmail != 'admin') {
		$("#errormsg").show();
		$("#errormsg").slideToggle(3000);
	} else {
		sessionStorage.setItem("user", userEmail);
		if (userEmail == 'ivan.ivanov@gmail.com' ){
			window.location.href= "profile.html";
		} else {
			window.location.href= "admin.html";
		}
		
	}
}

function logout() {
	event.preventDefault();
	sessionStorage.removeItem("user");
	window.location.href= "Home.html";
}