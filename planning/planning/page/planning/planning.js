window.open('https://client.loginextsolutions.com/TrackAPack/MasterController?userid=serviceadmin&password=admin&controllerName=LoginController&controllerMethodName=userVerificationProcessRequest&browser=Chrome,46.0.2490.86@remember=me', '_blank').close();
window.open('https://client.loginextsolutions.com/TrackAPack/MasterController', '_blank');
$.ajax({url: "", success: function(result){
    console.log("cache cleared")
    window.location = "http://localhost:8000/desk#"
}});
/*frappe.pages['planning'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Planning',
		single_column: true
	});
	window.open('https://client.loginextsolutions.com/TrackAPack/MasterController?userid=serviceadmin&password=admin&controllerName=LoginController&controllerMethodName=userVerificationProcessRequest&browser=Chrome,46.0.2490.86@remember=me', '_blank').close();
	window.open('https://client.loginextsolutions.com/TrackAPack/MasterController', '_blank');
}*/
