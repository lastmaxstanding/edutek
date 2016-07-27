$(document).ready (function() {


var desks = [
	$("#descStuD1"),
	$("#descStuD2"),
	$("#descStuD3"),
	$("#descStuD4"),
	$("#descStuD5"),
	$("#descStuD6"),
	$("#descStuD7"),
	$("#descStuD8"),
	$("#descStuD9"),
	$("#descStuD10"),
	$("#descStuD11"),
	$("#descStuD12"),
	$("#descStuD13"),
	$("#descStuD14"),
	$("#descStuD15"),
	$("#descStuD16"),
	$("#descStuD17"),
	$("#descStuD18"),
	$("#descStuD19"),
	$("#descStuD20"),
	$("#descStuD21"),
	$("#descStuD22"),
	$("#descStuD23"),
	$("#descStuD24"),
	$("#descStuD25"),
	$("#descStuD26"),
	$("#descStuD27"),
	$("#descStuD28"),
	$("#descStuD29"),
	$("#descStuD30")
];

$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];
	       // console.log(fullNames);
	       


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name);
	    } //for fullNames.push

	 $(".runDescSeats").on('click', function() {
	 	var d, k;

		for (d=desks.length - 1, k=0; d>=0, k<fullNames.length; d--, k++) {
	 	$(desks[d].html(fullNames[k]));
	 	// console.log(desks[d]);
	 	// console.log(fullNames[k]);
	 	// //console.log(fullNames[e]);

	 	//var e=fullNames.length - 1; e>=0; e--
	 	//$("#ascStuD19").html('carlos');
	 	}//for desks loop
	 	
	 	
	 	
	 	

	});//runAscSeats

	    }//results 

});	//ajax

$("#tdesk1").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk2").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk3").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk4").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk5").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk6").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk7").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk8").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk9").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk10").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk11").on('click', function() {
$( this ).toggleClass('black-bg');
});

$("#tdesk12").on('click', function() {
$( this ).toggleClass('black-bg');
});

});//document