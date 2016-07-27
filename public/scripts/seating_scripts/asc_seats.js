				$(document).ready (function() {


var desks = [
	$("#ascStuD1"),
	$("#ascStuD2"),
	$("#ascStuD3"),
	$("#ascStuD4"),
	$("#ascStuD5"),
	$("#ascStuD6"),
	$("#ascStuD7"),
	$("#ascStuD8"),
	$("#ascStuD9"),
	$("#ascStuD10"),
	$("#ascStuD11"),
	$("#ascStuD12"),
	$("#ascStuD13"),
	$("#ascStuD14"),
	$("#ascStuD15"),
	$("#ascStuD16"),
	$("#ascStuD17"),
	$("#ascStuD18"),
	$("#ascStuD19"),
	$("#ascStuD20"),
	$("#ascStuD21"),
	$("#ascStuD22"),
	$("#ascStuD23"),
	$("#ascStuD24"),
	$("#ascStuD25"),
	$("#ascStuD26"),
	$("#ascStuD27"),
	$("#ascStuD28"),
	$("#ascStuD29"),
	$("#ascStuD30")

];

$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name + "&nbsp &nbsp");
	    } //for fullNames.push

	 $(".runAscSeats").on('click', function() {
	 	for (var d=e=0; d<desks.length && e<fullNames.length; d++, e++) {
	 	$(desks[d].html(fullNames[e]));
	 	// console.log(desks[d]);
	 	// console.log(fullNames[e]);
	 	//$("#ascStuD19").html('carlos');
	 	}//for desks loop
	 	
	 	
	 	
	 	

	});//runAscSeats

	    }//results 

});	//ajax

// $("#tdesk1").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk2").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk3").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk4").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk5").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk6").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk7").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk8").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk9").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk10").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk11").on('click', function() {
// $( this ).toggleClass('green-bg');
// });

// $("#tdesk12").on('click', function() {
// $( this ).toggleClass('green-bg');
// });




});//document