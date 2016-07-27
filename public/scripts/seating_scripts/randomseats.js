$(document).ready (function() {

	var shuffle = function(a) {
		for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
		return a;
	};

var desks = [
		$("#randStuD1"),
		$("#randStuD2"),
		$("#randStuD3"),
		$("#randStuD4"),
		$("#randStuD5"),
		$("#randStuD6"),
		$("#randStuD7"),
		$("#randStuD8"),
		$("#randStuD9"),
		$("#randStuD10"),
		$("#randStuD11"),
		$("#randStuD12"),
		$("#randStuD13"),
		$("#randStuD14"),
		$("#randStuD15"),
		$("#randStuD16"),
		$("#randStuD17"),
		$("#randStuD18"),
		$("#randStuD19"),
		$("#randStuD20"),
		$("#randStuD21"),
		$("#randStuD22"),
		$("#randStuD23"),
		$("#randStuD24"),
		$("#randStuD25"),
		$("#randStuD26"),
		$("#randStuD27"),
		$("#randStuD28"),
		$("#randStuD29"),
		$("#randStuD30")
	];

	$.ajax({
	    url: "/api/students",
	    dataType: 'json',
	    success: function(results){
	     
	      
	       var fullNames = [];


	       	for (var d=0; d<results.length; d++) {
	 			fullNames.push(results[d].last_name +', '+ results[d].first_name);
	    	}

	    	var randomShuff = shuffle(fullNames);
	    	var i = 0;

	    	$(".runRandomSeats").on('click', function() {


		for (var d=e=0; d<desks.length && e<randomShuff.length; d++, e++) {
	 	$(desks[d].html(randomShuff[e]));
	 	// console.log(desks[d]);
	 	// console.log(fullNames[e]);
	 	//$("#ascStuD19").html('carlos');
	 	}//for desks loop
			});


		}
	});

	// $(".clearRandomSeats").on("click", function(){

	// 	for ( d=0; d<desks.length; d++) {

	// 		$(desks[d]).html("");
	// 	}
		
	// });

// Clear Seats

	$(".clearRandomSeats").on("click", function(){

		for ( d=0; d<desks.length; d++) {

			$(desks[d]).html("");
		}
		
	});

});








// $(document).ready (function() {

// // List of Desks

// 	var desks = [
// 		$("#randStuD1"),
// 		$("#randStuD2"),
// 		$("#randStuD3"),
// 		$("#randStuD4"),
// 		$("#randStuD5"),
// 		$("#randStuD6"),
// 		$("#randStuD7"),
// 		$("#randStuD8"),
// 		$("#randStuD9"),
// 		$("#randStuD10"),
// 		$("#randStuD11"),
// 		$("#randStuD12"),
// 		$("#randStuD13"),
// 		$("#randStuD14"),
// 		$("#randStuD15"),
// 		$("#randStuD16"),
// 		$("#randStuD17"),
// 		$("#randStuD18"),
// 		$("#randStuD19"),
// 		$("#randStuD20"),
// 		$("#randStuD21"),
// 		$("#randStuD22"),
// 		$("#randStuD23"),
// 		$("#randStuD24"),
// 		$("#randStuD25"),
// 		$("#randStuD26"),
// 		$("#randStuD27"),
// 		$("#randStuD28"),
// 		$("#randStuD29"),
// 		$("#randStuD30")
// 	];

// // Clear Seats

// 	$(".clearRandomSeats").on("click", function(){

// 		for ( d=0; d<desks.length; d++) {

// 			$(desks[d]).html("");
// 		}
		
// 	});

// // Random Seats Action

// 	$(".runRandomSeats").on('click', function() {


// 		$.ajax({
// 		  url: "/api/students",
// 		  cache: false
// 		})
// 		  .done(function(data) {
// 		    // console.log(data);

// 			var studentsJson = data;

// 			var random = [];

// 			// studentsJson for loop

// 			for ( i=0; i<studentsJson.length; i++ ) {

// 				// var students = studentsJson[Math.floor(Math.random()*studentsJson.length)];
// 				// console.log(students);


// 				function shuffle(array) {
// 				    var i, temp, j;
// 				    for (i = studentsJson.length; i; i--) {
// 				        j = Math.floor(Math.random() * i);
// 				        temp = studentsJson[i - 1];
// 				        studentsJson[i - 1] = studentsJson[j];
// 				        studentsJson[j] = temp;
// 				    }
// 				}

// 				shuffle(studentsJson[i]);

// 				// var students = shuffle(studentsJson);

// 				random.push(studentsJson[i]);

// 				// console.log(random);
			
// 			} // End Forloop for students

// 			// 	console.log(random);

// 			for ( r=0; r<random.length; r++ ) {

// 				var stu1 = random[0];
// 				var stu2 = random[1];
// 				var stu3 = random[2];
// 				var stu4 = random[3];
// 				var stu5 = random[4];
// 				var stu6 = random[5];
// 				var stu7 = random[6];
// 				var stu8 = random[7];
// 				var stu9 = random[8];
// 				var stu10 = random[9];
// 				var stu11 = random[10];
// 				var stu12 = random[11];
// 				var stu13 = random[12];
// 				var stu14 = random[13];
// 				var stu15 = random[14];
// 				var stu16 = random[15];
// 				var stu17 = random[16];
// 				var stu18 = random[17];
// 				var stu19 = random[18];
// 				var stu20 = random[19];
// 				var stu21 = random[20];
// 				var stu22 = random[21];
// 				var stu23 = random[22];
// 				var stu24 = random[23];
// 				var stu25 = random[24];
// 				var stu26 = random[25];
// 				var stu27 = random[26];
// 				var stu28 = random[27];
// 				var stu29 = random[28];
// 				var stu30 = random[29];

// 				for ( d=0; d<desks.length; d++ ) {

// 					$(desks[0]).html(stu1.first_name + " " + stu1.last_name);
// 					$(desks[1]).html(stu2.first_name + " " + stu2.last_name);
// 					$(desks[2]).html(stu3.first_name + " " + stu3.last_name);
// 					$(desks[3]).html(stu4.first_name + " " + stu4.last_name);
// 					$(desks[4]).html(stu5.first_name + " " + stu5.last_name);
// 					$(desks[5]).html(stu6.first_name + " " + stu6.last_name);
// 					$(desks[6]).html(stu7.first_name + " " + stu7.last_name);
// 					$(desks[7]).html(stu8.first_name + " " + stu8.last_name);
// 					$(desks[8]).html(stu9.first_name + " " + stu9.last_name);
// 					$(desks[9]).html(stu10.first_name + " " + stu10.last_name);
// 					$(desks[10]).html(stu11.first_name + " " + stu11.last_name);
// 					$(desks[11]).html(stu12.first_name + " " + stu12.last_name);
// 					$(desks[12]).html(stu13.first_name + " " + stu13.last_name);
// 					$(desks[13]).html(stu14.first_name + " " + stu14.last_name);
// 					$(desks[14]).html(stu15.first_name + " " + stu15.last_name);
// 					$(desks[15]).html(stu16.first_name + " " + stu16.last_name);
// 					$(desks[16]).html(stu17.first_name + " " + stu17.last_name);
// 					$(desks[17]).html(stu18.first_name + " " + stu18.last_name);
// 					$(desks[18]).html(stu19.first_name + " " + stu19.last_name);
// 					$(desks[19]).html(stu20.first_name + " " + stu20.last_name);
// 					$(desks[20]).html(stu21.first_name + " " + stu21.last_name);
// 					$(desks[21]).html(stu22.first_name + " " + stu22.last_name);
// 					$(desks[22]).html(stu23.first_name + " " + stu23.last_name);
// 					$(desks[23]).html(stu24.first_name + " " + stu24.last_name);
// 					$(desks[24]).html(stu25.first_name + " " + stu25.last_name);
// 					$(desks[25]).html(stu26.first_name + " " + stu26.last_name);
// 					$(desks[26]).html(stu27.first_name + " " + stu27.last_name);
// 					$(desks[27]).html(stu28.first_name + " " + stu28.last_name);
// 					$(desks[28]).html(stu29.first_name + " " + stu29.last_name);
// 					$(desks[29]).html(stu30.first_name + " " + stu30.last_name);
// 				}
// 			}
// 		// End .done function
// 		});

// 		  return false;
// 	// End on click function for random seats
// 	});
// // End doc.ready function
// });