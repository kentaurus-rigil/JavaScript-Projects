function validateForm() {
	var x = document.forms["myform"]["pnumber"].value;
	if (x == "") {
		alert("Phone number must be filled out");
		return false;
		}
	}