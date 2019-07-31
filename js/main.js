console.log("Hello World, I am main.js");

$(document).ready(function(){
	$(".one-way").click(function(){
  		event.preventDefault()
  		
  		var pickup 		= $("#one-way-pickup").val();
  		var destination = $("#one-way-destination").val()
  		var pickup_date = $("#one-way-pickup-date").val()
  		var pickup_time = $("#one-way-pickup-time").val()

    	$.ajax({
    		data: 		"origin="			+ pickup 
    					+"&destination="	+ destination 
    					+"&pickup_date="	+ pickup_date 
    					+ "&pickup_time="	+ pickup_time, 
    		url: 		"/app/quote.php",
    		error:      function(){}, 
    		success: 	function(result){
      						console.log(result);
    					},
    		method: 	"POST" 
    	});
  	});
});