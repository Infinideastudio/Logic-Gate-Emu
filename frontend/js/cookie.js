function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}
function setCookie(name,value){  
	var exp = new Date();  
	exp.setTime(exp.getTime() + 30*12*24*60*60*1000);  
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  
}
