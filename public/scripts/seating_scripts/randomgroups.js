$(document).ready (function() {


var shuffle = function(a) {
	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
	return a;
};

	$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name + "&nbsp &nbsp");
	    } //for fullNames.push

	    	var randomShuff = shuffle(fullNames);
	    	var i = 0;

	    	var createRosterGroups = function (arr, chunkSize) {
		    var groups = [], i;
		    chunkSize = parseInt(chunkSize)
		    for (i = 0; i < fullNames.length; i += chunkSize) {
		    groups.push(fullNames.slice(i, i + chunkSize));

		}//for chucksize

		    return groups;

}//createRosterGroups()

	    	$('#g2').on('click', function(){
				var chunk = 2;
				activate(chunk);
	});
			$('#g3').on('click', function(){
				var chunk = 3;
				activate(chunk);
	});
			$('#g4').on('click', function(){
				var chunk = 4;
				activate(chunk);
	});
			$('#g5').on('click', function(){
				var chunk = 5;
				activate(chunk);
	});
			$('#g6').on('click', function(){
				var chunk = 6;
				activate(chunk);

	});


			function activate(chunkSize) {

			var groupedArray = createRosterGroups(randomShuff, chunkSize);
			
			for (var d = 0; d < groupedArray.length; d++){
				// console.log("each array " + groupedArray[d]); //each array in list
			for (var x = 0; x < groupedArray[d].length; x++) {
				// console.log("each member " + groupedArray[d][x]); // each member in array
			
		}

	 return $('.main').html(groupedArray.join(' <br><br> '));

	}
}
		}//success

	}); //ajax



$(".clearRandomGroups").on('click', function() {

    location.reload();
    //$('.main').empty();
});

}); //document