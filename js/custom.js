(function($){
	//console.log(window.location);
	// function to get url content and pushing to the homepage content_block div
	function gotopage(pageurl){
		$.ajax({
			url: pageurl,
			type: "GET",
			dataType: "html",
			success: function(res){
				if(pageurl=='home.html')pageurl='index.html';
				window.history.pushState('','',pageurl);
				$(".content_block").html(res);
			},
			error: function(error){
				console.log("Error occured ",error);
			}
		});
	}
	// calling function on page load for the first time
	gotopage("home.html");
	//here on clicking passing the url to the gotopage function
	$("a").on("click",function(e){ //
		e.preventDefault();
		var url = $(this).attr("href");
		gotopage(url);
	});
})(jQuery)